import { UserForm } from '@/components/ui';
import { getUser } from '@/lib/supabase/users';
import { UUID } from 'crypto';

const UserPage = async (props: any) => {
  const data = await getUser(props.params.id as UUID);
  console.log(data);
  if (data) return <UserForm user={data} />;
};

export default UserPage;
