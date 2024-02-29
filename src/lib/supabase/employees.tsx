import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';

export type Employee = Database['public']['Tables']['employees']['Row'];

function getDefaultEmployee() {
  return {
    name: '',
    role: '',
    phone_number: '',
    email: ''
  };
}

async function getEmployees() {
  try {
    const { data, error } = await supabase.from('employees').select('*');

    if (error) {
      throw error;
    }

    return (data as Employee[]) || [];
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return false;
  }
}

async function getEmployee(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return false;
  }
}

async function updateEmployee(employee: any) {
  try {
    const { error } = await supabase
      .from('employees')
      .update(employee)
      .eq('id', employee.id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertEmployee(employee: any) {
  try {
    const { error } = await supabase.from('employees').insert(employee);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
  }
}
async function deleteEmployee(id: UUID) {
  try {
    const { error } = await supabase.from('emploeyees').delete().eq('id', id);

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
  getDefaultEmployee,
  getEmployees,
  getEmployee,
  insertEmployee,
  updateEmployee,
  deleteEmployee
};
