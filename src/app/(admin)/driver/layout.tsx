import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { Bus, Driver, supabase } from '@/lib/database';
import Link from 'next/link';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  let { data: Drivers, error } = await supabase.from('Drivers').select('*');
  const supabaseData: Driver[] = Drivers as Driver[];
  const navRefs = { name: 'Neu', id: '/' };

  return (
    <main className="flex gap-4 w-full h-full">
      <div className="flex flex-col gap-2 w-40 h-screen bg-black/10">
        <LayoutLink key={navRefs.name} href={`/driver/${navRefs.id}`}>
          {navRefs.name}
        </LayoutLink>
        {supabaseData?.map((data: Driver, key) => {
          return (
            <LayoutLink key={key} href={`/driver/${data.driver_id}`}>
              <p className="font-thin text-xs italic h-6 opacity-50">
                {data?.driver_id?.substring(0, 20)}
              </p>
              <p className="text-white h-6">
                {`${data?.first_name}\t${data.last_name}`}
              </p>
            </LayoutLink>
          );
        })}
      </div>
      {children}
    </main>
  );
}
