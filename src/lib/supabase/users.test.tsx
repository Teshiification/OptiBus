import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultUser,
  getUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser
} from './users';
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

describe('User functions', () => {
  const mockUser = {
    id: uuidv4(),
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
    phone_number: '1234567890'
  };

  it('should fetch users', async () => {
    const mockData = [mockUser];
    const { data } = await getUsers();
    expect(data).toEqual(mockData);
  });

  it('should fetch a user by id', async () => {
    const { data } = await getUser(mockUser.id);
    expect(data).toEqual(mockUser);
  });

  it('should insert a user', async () => {
    const success = await insertUser(mockUser);
    expect(success).toBe(true);
  });

  it('should update a user', async () => {
    const success = await updateUser(mockUser);
    expect(success).toBe(true);
  });

  it('should delete a user', async () => {
    const success = await deleteUser(mockUser.id);
    expect(success).toBe(true);
  });
});
