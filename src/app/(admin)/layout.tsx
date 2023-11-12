import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import '../globals.css';

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const navRefs = [
    { name: 'Dashboard', link: '/dashboard', divider: true },
    { name: 'Carport', link: '/carport' },
    { name: 'Driver', link: '/driver' },
    //  { name: 'Payments', link: '/payments' },
    { name: 'Reservations', link: '/reservations' }
    //  { name: 'Feedback', link: '/feedback' }
  ];

  return (
    <main className="w-screen h-screen flex">
      <div className="flex flex-col gap-2 w-40 h-screen bg-black/10">
        {navRefs?.map((data, key) => {
          return (
            <>
              <LayoutLink key={key} href={data.link}>
                {data.name}
              </LayoutLink>
              {data?.divider && (
                <div className="w-full h-[1px] bg-blue-500 rounded" />
              )}
            </>
          );
        })}
      </div>
      <div className="w-full h-full">{children}</div>
    </main>
  );
}
