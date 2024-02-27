import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';

export type Booking = Database['public']['Tables']['bookings']['Row'];

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
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .returns<Booking[]>();

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
      .returns<Booking>()
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

async function updateBooking(booking: Booking) {
  try {
    const { error } = await supabase
      .from('bookings')
      .update(booking)
      .eq('id', booking.id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertBooking(booking: Booking) {
  try {
    const { error } = await supabase.from('bookings').insert(booking);

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
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
