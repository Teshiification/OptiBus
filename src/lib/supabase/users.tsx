import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';

export type User = Database['public']['Tables']['users']['Row'];

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
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .returns<User[]>();
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
      .returns<User>()
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
    const { error } = await supabase
      .from('users')
      .update(user)
      .eq('id', user.id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertUser(user: any) {
  try {
    const { error } = await supabase.from('users').insert(user);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
  }
}

async function deleteUser(id: UUID) {
  try {
    const { error } = await supabase.from('users').delete().eq('id', id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error delete data:', error);
    return false;
  }
}

export {
  getDefaultUser,
  getUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser
};
