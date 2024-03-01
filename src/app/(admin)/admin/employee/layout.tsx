import { Card } from '@/components';
import LayoutLink from '@/components/core/LayoutLink/LayoutLink';
import { Employee, getEmployees } from '@/lib/supabase/employees';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const employee: Employee[] | false = await getEmployees();
  const navRefs = { name: 'Neu', id: '/admin/employee' };

  return (
    <main className="flex gap-4 h-screen w-screen p-4">
      <Card className="w-80 gap-2">
        <LayoutLink key={navRefs.name} href={navRefs.id}>
          {navRefs.name}
        </LayoutLink>
        {employee &&
          employee?.map((data, key) => {
            return (
              <LayoutLink key={key} href={`/admin/employee/${data.id}`}>
                <p className="font-thin text-xs italic h-6 opacity-50">
                  {`id: ${data?.id}`}
                </p>
                <p className=" h-6">{`${data.name}`}</p>
              </LayoutLink>
            );
          })}
      </Card>
      {children}
    </main>
  );
}
