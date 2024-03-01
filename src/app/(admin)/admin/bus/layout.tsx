import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { Bus, getBuses } from '@/lib/supabase/buses';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const bus: Bus[] | false = await getBuses();
  const navRefs = { name: 'Neu', id: '/admin/bus' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80 gap-2">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {bus &&
          bus?.map((data, key) => {
            return (
              <LayoutLink key={key} href={`/admin/bus/${data.id}`}>
                <p className="font-thin text-xs italic h-6 opacity-50">
                  {`id: ${data?.id}`}
                </p>
                <p className=" h-6">{`${data.bus_number}`}</p>
              </LayoutLink>
            );
          })}
      </Card>
      {children}
    </main>
  );
}
