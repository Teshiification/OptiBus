import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { getDrivers } from '@/lib/supabase/drivers';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const driver = await getDrivers();
  const navRefs = { name: 'Neu', id: '/admin/driver' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {driver?.map((data, key) => {
          return (
            <LayoutLink key={key} href={`/admin/driver/${data.id}`}>
              <p className="font-thin text-xs italic h-6 opacity-50">
                {`id: ${data?.id}`}
              </p>
              <p className="text-white h-6">{`${data.license_number}`}</p>
            </LayoutLink>
          );
        })}
      </Card>
      {children}
    </main>
  );
}
