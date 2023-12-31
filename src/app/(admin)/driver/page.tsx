import NewDriver from '@/components/ui/Driver/NewDriver';
import {
  Session,
  createServerComponentClient
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

const DriverPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session)
    return (
      <div className="w-full h-full">
        <NewDriver session={session as Session} />
      </div>
    );
};

export default DriverPage;
