import { DriverForm } from '@/components/ui/Admin/Forms';
import { getDriver } from '@/lib/supabase/drivers';
import { UUID } from 'crypto';

const DriverPage = async (props: any) => {
  const data = await getDriver(props.params.id as UUID);
  console.log(data);
  if (data) return <DriverForm driver={data} />;
};

export default DriverPage;
