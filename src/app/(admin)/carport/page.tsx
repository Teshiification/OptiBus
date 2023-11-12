import Carport from '@/components/ui/Carport/Carport';
import {
  createServerComponentClient,
  Session
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

const CarportPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session)
    return (
      <div className="w-full h-full">
        <Carport session={session} newEntry />
      </div>
    );
};

export default CarportPage;
