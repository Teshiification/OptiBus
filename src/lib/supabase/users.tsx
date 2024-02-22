import { UUID } from 'crypto';
import { supabase } from './supabase';

function getDefaultUser() {
  return {
    email: '',
    password: '',
    name: '',
    phone_number: ''
  };
}

async function getUsers() {
  try {
    const { data, error } = await supabase.from('users').select('*');
    // .returns<Database["public"]["Tables"]["users"][]>()

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getUser(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function updateUser(user: any) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(user)
      .eq('id', user.id)
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error update data:', error);
    return null;
  }
}

async function insertUser(user: any) {
  try {
    const { data, error } = await supabase.from('users').insert(user).select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return null;
  }
}

export { getDefaultUser, getUsers, getUser, insertUser, updateUser };
