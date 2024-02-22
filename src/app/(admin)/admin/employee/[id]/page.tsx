import { EmployeeForm } from '@/components/ui/Admin';
import { getEmployee } from '@/lib/supabase/employees';
import { UUID } from 'crypto';

const EmployeePage = async (props: any) => {
  const data = await getEmployee(props.params.id as UUID);
  console.log(data);
  if (data) return <EmployeeForm employee={data} />;
};

export default EmployeePage;
