import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultDriver,
  getDrivers,
  getDriver,
  insertDriver,
  updateDriver,
  deleteDriver
} from './drivers';
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

describe('Driver functions', () => {
  const mockDriver = {
    id: uuidv4(),
    license_number: 'ABC123',
    employee_id: 'EMP123'
  };

  it('should fetch drivers', async () => {
    const mockData = [mockDriver];
    const { data } = await getDrivers();
    expect(data).toEqual(mockData);
  });

  it('should fetch a driver by id', async () => {
    const { data } = await getDriver(mockDriver.id);
    expect(data).toEqual(mockDriver);
  });

  it('should insert a driver', async () => {
    const success = await insertDriver(mockDriver);
    expect(success).toBe(true);
  });

  it('should update a driver', async () => {
    const success = await updateDriver(mockDriver);
    expect(success).toBe(true);
  });

  it('should delete a driver', async () => {
    const success = await deleteDriver(mockDriver.id);
    expect(success).toBe(true);
  });
});
