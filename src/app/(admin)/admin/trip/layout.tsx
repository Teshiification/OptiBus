import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { getTrips } from '@/lib/supabase/trips';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const trip = await getTrips();
  const navRefs = { name: 'Neu', id: '/admin/trip' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80 ">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {trip?.map((data, key) => {
          return (
            <LayoutLink key={key} href={`/admin/trip/${data.id}`}>
              <p className="font-thin text-xs italic h-6 opacity-50">
                {`id: ${data?.id}`}
              </p>
              <p className="text-white h-6">{`${data.departure_location}`}</p>
            </LayoutLink>
          );
        })}
      </Card>
      <Card>{children}</Card>
    </main>
  );
}
