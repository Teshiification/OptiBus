import { UUID } from 'crypto';
import { supabase } from './supabase';

function getDefaultBus() {
  return {
    user_id: '',
    trip_id: '',
    buses_data: new Date(),
    number_of_seats: 0
  };
}

async function getBuses() {
  try {
    const { data, error } = await supabase.from('buses').select('*');
    // .returns<Database["public"]["Tables"]["busess"][]>()

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
    const { data, error } = await supabase
      .from('buses')
      .update(buses)
      .eq('id', buses.id)
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

async function insertBus(buses: any) {
  try {
    const { data, error } = await supabase.from('buses').insert(buses).select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return null;
  }
}

async function deleteBus(id: UUID) {
  try {
    const { data, error } = await supabase.from('buses').delete().eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return null;
  }
}

export { getDefaultBus, getBuses, getBus, insertBus, updateBus, deleteBus };
