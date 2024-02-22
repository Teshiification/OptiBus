import { TripForm } from '@/components/ui';
import { getTrip } from '@/lib/supabase/trips';
import { UUID } from 'crypto';

const TripPage = async (props: any) => {
  const data = await getTrip(props.params.id as UUID);
  console.log(data);
  if (data) return <TripForm trip={data} />;
};

export default TripPage;
