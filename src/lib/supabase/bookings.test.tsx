import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultBooking,
  getBookings,
  getBooking,
  insertBooking,
  updateBooking,
  deleteBooking
} from './bookings';
import { supabase } from './supabase';

jest.mock('./supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn()
        }))
      })),
      insert: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    }))
  }
}));

describe('Booking functions', () => {
  const mockBooking = {
    id: uuidv4(),
    user_id: 'user123',
    trip_id: 'trip123',
    booking_data: new Date(),
    number_of_seats: 2
  };

  it('should fetch bookings', async () => {
    const mockData = [mockBooking];
    const { data } = await getBookings();
    expect(data).toEqual(mockData);
  });

  it('should fetch a booking by id', async () => {
    const { data } = await getBooking(mockBooking.id);
    expect(data).toEqual(mockBooking);
  });

  it('should insert a booking', async () => {
    const success = await insertBooking(mockBooking);
    expect(success).toBe(true);
  });

  it('should update a booking', async () => {
    const success = await updateBooking(mockBooking);
    expect(success).toBe(true);
  });

  it('should delete a booking', async () => {
    const success = await deleteBooking(mockBooking.id);
    expect(success).toBe(true);
  });
});
