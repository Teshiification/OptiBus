import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';

export type Bus = Database['public']['Tables']['buses']['Row'];

function getDefaultBus() {
  return {
    bus_number: 0,
    model: 'Mercedes',
    year: 2000,
    seating_capacity: 50,
    is_available: false
  };
}

async function getBuses() {
  try {
    let { data, error } = await supabase.from('buses').select('*');

    if (error) {
      throw error;
    }

    return (data as Bus[]) || [];
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function getBus(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('buses')
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

async function updateBus(buses: any) {
  try {
    const { error } = await supabase
      .from('buses')
      .update(buses)
      .eq('id', buses.id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertBus(buses: any) {
  try {
    const { error } = await supabase.from('buses').insert(buses);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
  }
}

async function deleteBus(id: UUID) {
  try {
    const { error } = await supabase.from('buses').delete().eq('id', id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error delete data:', error);
    return false;
  }
}

export { getDefaultBus, getBuses, getBus, insertBus, updateBus, deleteBus };
