import { UUID } from 'crypto';
import { supabase } from './supabase';

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
    // .returns<Database["public"]["Tables"]["employee"][]>()

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
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
    return null;
  }
}

async function updateEmployee(employee: any) {
  try {
    const { data, error } = await supabase
      .from('employees')
      .update(employee)
      .eq('id', employee.id)
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

async function insertEmployee(employee: any) {
  try {
    const { data, error } = await supabase
      .from('employees')
      .insert(employee)
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return null;
  }
}

export {
  getDefaultEmployee,
  getEmployees,
  getEmployee,
  insertEmployee,
  updateEmployee
};
