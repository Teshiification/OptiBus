import { UUID } from 'crypto';
import { supabase } from './supabase';

function getDefaultDriver() {
  return {
    license_number: '',
    employee_id: ''
  };
}

async function getDrivers() {
  try {
    const { data, error } = await supabase.from('drivers').select('*');
    // .returns<Database["public"]["Tables"]["drivers"][]>()

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
    const { data, error } = await supabase
      .from('drivers')
      .update(driver)
      .eq('id', driver.id)
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

async function insertDriver(driver: any) {
  try {
    const { data, error } = await supabase
      .from('drivers')
      .insert(driver)
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

export { getDefaultDriver, getDrivers, getDriver, insertDriver, updateDriver };
