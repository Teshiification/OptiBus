import { BusForm } from '@/components/ui/Admin/Forms';
import { getBus } from '@/lib/supabase/buses';
import { UUID } from 'crypto';

const BusPage = async (props: any) => {
  const data = await getBus(props.params.id as UUID);
  console.log(data);
  if (data) return <BusForm bus={data} />;
};

export default BusPage;
