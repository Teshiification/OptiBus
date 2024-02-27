import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { getPayments } from '@/lib/supabase/payments';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const payment = await getPayments();
  const navRefs = { name: 'Neu', id: '/admin/payment' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80 ">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {payment?.map((data, key) => {
          return (
            <LayoutLink key={key} href={`/admin/payment/${data.id}`}>
              <p className="font-thin text-xs italic h-6 opacity-50">
                {`id: ${data?.id}`}
              </p>
              <p className="text-white h-6">{`${data.booking_id}`}</p>
            </LayoutLink>
          );
        })}
      </Card>
      {children}
    </main>
  );
}
