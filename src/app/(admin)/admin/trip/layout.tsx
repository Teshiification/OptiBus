import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { Trip, getTrips } from '@/lib/supabase/trips';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const trips: Trip[] | false = await getTrips();
  const navRefs = { name: 'Neu', id: '/admin/trip' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80 gap-2">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {trips &&
          trips?.map((data, key) => {
            return (
              <LayoutLink key={key} href={`/admin/trip/${data.id}`}>
                <p className="font-thin text-xs italic h-6 opacity-50">
                  {`id: ${data?.id}`}
                </p>
                <p className=" h-6">{`${data.departure_location}-${data.arrival_location}`}</p>
              </LayoutLink>
            );
          })}
      </Card>
      {children}
    </main>
  );
}
