import { UUID } from 'crypto';
import { supabase } from './supabase';

function getDefaultTrip() {
  return {
    departure_location: '',
    arrival_location: '',
    departure_time: new Date(),
    arrival_time: new Date(),
    price: 0,
    seats_available: 0,
    bus_id: ''
  };
}

async function getTrips() {
  try {
    const { data, error } = await supabase.from('trips').select('*');
    // .returns<Database["public"]["Tables"]["trip"][]>()

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getTrip(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('trips')
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

async function updateTrip(trip: any) {
  try {
    const { data, error } = await supabase
      .from('trips')
      .update(trip)
      .eq('id', trip.id)
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

async function insertTrip(trip: any) {
  try {
    const { data, error } = await supabase.from('trips').insert(trip).select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return null;
  }
}
async function deleteTrip(id: UUID) {
  try {
    const { data, error } = await supabase.from('trips').delete().eq('id', id);

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
  getDefaultTrip,
  getTrips,
  getTrip,
  insertTrip,
  updateTrip,
  deleteTrip
};
