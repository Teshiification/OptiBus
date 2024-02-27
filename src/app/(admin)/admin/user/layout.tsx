import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { getUsers } from '@/lib/supabase/users';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const user = await getUsers();
  const navRefs = { name: 'Neu', id: '/admin/user' };

  return (
    <main className="flex gap-4 h-full p-4">
      <Card className="w-80">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {user?.map((data, key) => {
          return (
            <LayoutLink key={key} href={`/admin/user/${data.id}`}>
              <p className="font-thin text-xs italic h-6 opacity-50">
                {`id: ${data?.id}`}
              </p>
              <p className="text-white h-6">{`${data.name}`}</p>
            </LayoutLink>
          );
        })}
      </Card>
      {children}
    </main>
  );
}
