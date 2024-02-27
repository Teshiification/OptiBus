import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';
import { Bus } from './buses';

export type Trip = {
  bus_id: number;
} & Database['public']['Tables']['trips']['Row'];

function getDefaultTrip() {
  return {
    departure_location: '',
    arrival_location: '',
    departure_time: new Date(),
    arrival_time: new Date(),
    price: 0,
    seats_available: 0,
    bus_id: 0
  };
}

async function getTrips() {
  try {
    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .returns<Trip>();

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
      .returns<Trip>()
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

async function updateTrip(trip: Trip) {
  try {
    const { data: busData, error: busError } = await supabase
      .from('buses')
      .select()
      .eq('id', trip.bus_id)
      .returns<Bus>();

    if (busError) {
      throw busError;
    }
    if (!busData.is_available) throw 'Bus not available';

    const { error } = await supabase
      .from('trips')
      .update(trip)
      .eq('id', trip.id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertTrip(trip: Trip) {
  try {
    const { data: busData, error: busError } = await supabase
      .from('buses')
      .select()
      .eq('id', trip.bus_id)
      .returns<Bus>();

    if (busError) {
      throw busError;
    }
    if (!busData.is_available) throw 'Bus not available';

    const { error } = await supabase.from('trips').insert(trip);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
  }
}
async function deleteTrip(id: UUID) {
  try {
    const { error } = await supabase.from('trips').delete().eq('id', id);

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
  getDefaultTrip,
  getTrips,
  getTrip,
  insertTrip,
  updateTrip,
  deleteTrip
};
