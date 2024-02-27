import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';
export type Driver = Database['public']['Tables']['drivers']['Row'];

function getDefaultDriver() {
  return {
    license_number: '',
    employee_id: ''
  };
}

async function getDrivers() {
  try {
    const { data, error } = await supabase
      .from('drivers')
      .select('*')
      .returns<Driver[]>();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getDriver(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('drivers')
      .select('*')
      .eq('id', id)
      .returns<Driver>()
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

async function updateDriver(driver: any) {
  try {
    const { error } = await supabase
      .from('drivers')
      .update(driver)
      .eq('id', driver.id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertDriver(driver: any) {
  try {
    const { error } = await supabase.from('drivers').insert(driver);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
  }
}

async function deleteDriver(id: UUID) {
  try {
    const { error } = await supabase.from('drivers').delete().eq('id', id);

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
  getDefaultDriver,
  getDrivers,
  getDriver,
  insertDriver,
  updateDriver,
  deleteDriver
};
