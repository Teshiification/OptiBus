import { v4 as uuidv4 } from 'uuid';
import {
  getDefaultPayment,
  getPayments,
  getPayment,
  insertPayment,
  updatePayment,
  deletePayment
} from './payments';
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

describe('Payment functions', () => {
  const mockPayment = {
    id: uuidv4(),
    booking_id: 'booking123',
    amount: 100,
    payment_data: new Date(),
    payment_status: 'paid'
  };

  it('should fetch payments', async () => {
    const mockData = [mockPayment];
    const { data } = await getPayments();
    expect(data).toEqual(mockData);
  });

  it('should fetch a payment by id', async () => {
    const { data } = await getPayment(mockPayment.id);
    expect(data).toEqual(mockPayment);
  });

  it('should insert a payment', async () => {
    const success = await insertPayment(mockPayment);
    expect(success).toBe(true);
  });

  it('should update a payment', async () => {
    const success = await updatePayment(mockPayment);
    expect(success).toBe(true);
  });

  it('should delete a payment', async () => {
    const success = await deletePayment(mockPayment.id);
    expect(success).toBe(true);
  });
});
