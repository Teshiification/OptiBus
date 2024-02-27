import { Card, CardContent, CardHeader } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { getBookings } from '@/lib/supabase/bookings';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const booking = await getBookings();
  const navRefs = { name: 'Neu', id: '/admin/booking' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {booking?.map((data, key) => {
          return (
            <LayoutLink key={key} href={`/admin/booking/${data.id}`}>
              <p className="font-thin text-xs italic h-6 opacity-50">
                {`id: ${data?.id}`}
              </p>
              <p className="text-white h-6">{`${data.trip_id}`}</p>
            </LayoutLink>
          );
        })}
      </Card>
      {children}
    </main>
  );
}
