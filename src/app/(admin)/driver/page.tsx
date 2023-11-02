import Driver from '@/components/ui/Driver/Driver';
import {
  createServerComponentClient,
  Session
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

const DriverPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <div className="w-full h-full">
      <Driver session={session as Session} newEntry />
    </div>
  );
};

export default DriverPage;
