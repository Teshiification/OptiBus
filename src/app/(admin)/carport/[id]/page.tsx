import Carport from '@/components/ui/Carport/Carport';
import {
  createServerComponentClient,
  Session
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const CarPage = async (props: any) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  return <Carport session={session as Session} id={props.params.id} />;
};
export default CarPage;
