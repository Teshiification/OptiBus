import { UUID } from 'crypto';
import { supabase } from './supabase';
import { Database } from '@/types/supabase';
export type Payment = Database['public']['Tables']['payments']['Row'];

function getDefaultPayment() {
  return {
    booking_id: '',
    amount: 0,
    payment_data: new Date(),
    payment_status: ''
  };
}

async function getPayments() {
  try {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .returns<Payment[]>();

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getPayment(id: UUID) {
  try {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('id', id)
      .returns<Payment>()
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

async function updatePayment(payment: any) {
  try {
    const { error } = await supabase
      .from('payments')
      .update(payment)
      .eq('id', payment.id);
    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error update data:', error);
    return false;
  }
}

async function insertPayment(payment: any) {
  try {
    const { error } = await supabase
      .from('payments')
      .insert(payment)
      .returns<Payment>()
      .single();

    if (error) {
      throw error;
    }

    return true;
  } catch (error: any) {
    console.error('Error insert data:', error);
    return false;
  }
}

async function deletePayment(id: UUID) {
  try {
    const { error } = await supabase.from('payments').delete().eq('id', id);

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
  getDefaultPayment,
  getPayments,
  getPayment,
  insertPayment,
  updatePayment,
  deletePayment
};
