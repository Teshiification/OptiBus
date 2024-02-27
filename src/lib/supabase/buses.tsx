import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';

export type Bus = {
  id: number;
  bus_number: number;
  model: string;
  year: number;
  seating_capacity: number;
  is_available: boolean;
};

function getDefaultBus() {
  return {
    id: 0,
    bus_number: 0,
    model: 'Mercedes',
    year: 2000,
    seating_capacity: 50,
    is_available: false
  };
}

async function getBuses() {
  try {
    const { data, error } = await supabase
      .from('buses')
      .select('*')
      .returns<Bus[]>();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getBus(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('buses')
      .select('*')
      .eq('id', id)
      .returns<Bus>()
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
