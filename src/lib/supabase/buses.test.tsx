import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultBus,
  getBuses,
  getBus,
  insertBus,
  updateBus,
  deleteBus
} from './buses';
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

describe('Bus functions', () => {
  const mockBus = {
    id: uuidv4(),
    bus_number: 123,
    model: 'Mercedes',
    year: 2000,
    seating_capacity: 50,
    is_available: false
  };

  it('should fetch buses', async () => {
    const mockData = [mockBus];
    const { data } = await getBuses();
    expect(data).toEqual(mockData);
  });

  it('should fetch a bus by id', async () => {
    const { data } = await getBus(mockBus.id);
    expect(data).toEqual(mockBus);
  });

  it('should insert a bus', async () => {
    const success = await insertBus(mockBus);
    expect(success).toBe(true);
  });

  it('should update a bus', async () => {
    const success = await updateBus(mockBus);
    expect(success).toBe(true);
  });

  it('should delete a bus', async () => {
    const success = await deleteBus(mockBus.id);
    expect(success).toBe(true);
  });
});
