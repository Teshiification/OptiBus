import { supabase } from './supabase/supabase';

async function GetUser() {
  return (await supabase.auth.getSession()).data.session?.user;
}

export { GetUser };
