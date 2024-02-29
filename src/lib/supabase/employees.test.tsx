import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultEmployee,
  getEmployees,
  getEmployee,
  insertEmployee,
  updateEmployee,
  deleteEmployee
} from './employees';
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

describe('Employee functions', () => {
  const mockEmployee = {
    id: uuidv4(),
    name: 'John Doe',
    role: 'Engineer',
    phone_number: '1234567890',
    email: 'john@example.com'
  };

  it('should fetch employees', async () => {
    const mockData = [mockEmployee];
    const { data } = await getEmployees();
    expect(data).toEqual(mockData);
  });

  it('should fetch an employee by id', async () => {
    const { data } = await getEmployee(mockEmployee.id);
    expect(data).toEqual(mockEmployee);
  });

  it('should insert an employee', async () => {
    const success = await insertEmployee(mockEmployee);
    expect(success).toBe(true);
  });

  it('should update an employee', async () => {
    const success = await updateEmployee(mockEmployee);
    expect(success).toBe(true);
  });

  it('should delete an employee', async () => {
    const success = await deleteEmployee(mockEmployee.id);
    expect(success).toBe(true);
  });
});
