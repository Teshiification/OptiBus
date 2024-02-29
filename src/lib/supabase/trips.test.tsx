import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultTrip,
  getTrips,
  getTrip,
  insertTrip,
  updateTrip,
  deleteTrip
} from './trips';
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

describe('Trip functions', () => {
  const mockTrip = {
    id: uuidv4(),
    departure_location: 'Location A',
    arrival_location: 'Location B',
    departure_time: new Date(),
    arrival_time: new Date(),
    price: 50,
    seats_available: 30,
    bus_number: '123ABC'
  };

  it('should fetch trips', async () => {
    const mockData = [mockTrip];
    const { data } = await getTrips();
    expect(data).toEqual(mockData);
  });

  it('should fetch a trip by id', async () => {
    const { data } = await getTrip(mockTrip.id);
    expect(data).toEqual(mockTrip);
  });

  it('should insert a trip', async () => {
    const success = await insertTrip(mockTrip);
    expect(success).toBe(true);
  });

  it('should update a trip', async () => {
    const success = await updateTrip(mockTrip);
    expect(success).toBe(true);
  });

  it('should delete a trip', async () => {
    const success = await deleteTrip(mockTrip.id);
    expect(success).toBe(true);
  });
});
