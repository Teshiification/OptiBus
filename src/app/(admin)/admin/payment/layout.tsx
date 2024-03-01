import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { Payment, getPayments } from '@/lib/supabase/payments';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const payment: Payment[] | false = await getPayments();
  const navRefs = { name: 'Neu', id: '/admin/payment' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80 gap-2">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {payment &&
          payment?.map((data, key) => {
            return (
              <LayoutLink key={key} href={`/admin/payment/${data.id}`}>
                <p className="font-thin text-xs italic h-6 opacity-50">
                  {`id: ${data?.id}`}
                </p>
                <p className=" h-6">{`${data.booking_id}`}</p>
              </LayoutLink>
            );
          })}
      </Card>
      {children}
    </main>
  );
}
