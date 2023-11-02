import { Bus, supabase } from '@/lib/database';
import Link from 'next/link';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  let { data: Buses, error } = await supabase.from('Buses').select('*');
  const supabaseData: Bus[] = Buses as Bus[];
  const navRefs = { name: 'Neu', id: '/' };

  return (
    <main className="flex gap-4 w-full h-full">
      <div className="flex flex-col gap-2 w-40 h-screen bg-black/10">
        <Link
          key={navRefs.name}
          href={`/carport/${navRefs.id}`}
          className="w-40 h-12 p-2 rounded font-semibold bg-black/10 hover:bg-black/5"
        >
          {navRefs.name}
        </Link>
        {supabaseData?.map((data: Bus, key) => {
          return (
            <Link
              key={key}
              href={`/carport/${data.bus_id}`}
              className="flex flex-col w-40 h-12 p-2 rounded bg-black/10 hover:bg-black/5 overflow-hidden"
            >
              <p className="font-thin text-xs italic h-6 opacity-50">
                {data.bus_id.substring(0, 20)}
              </p>
              <p className="text-white h-6">
                {`${data.bus_number}\t${data.model}`}
              </p>
            </Link>
          );
        })}
      </div>
      {children}
    </main>
  );
}
