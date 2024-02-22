import { UUID } from 'crypto';
import { supabase } from './supabase';

function getDefaultBooking() {
  return {
    user_id: '',
    trip_id: '',
    booking_data: new Date(),
    number_of_seats: 0
  };
}

async function getBookings() {
  try {
    const { data, error } = await supabase.from('bookings').select('*');
    // .returns<Database["public"]["Tables"]["bookings"][]>()

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getBooking(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('bookings')
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

async function updateBooking(booking: any) {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .update(booking)
      .eq('id', booking.id)
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

async function insertBooking(booking: any) {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert(booking)
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

async function deleteBooking(id: UUID) {
  try {
    const { error } = await supabase.from('bookings').delete().eq('id', id);

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
  getDefaultBooking,
  getBookings,
  getBooking,
  insertBooking,
  updateBooking,
  deleteBooking
};
