import { UUID } from 'crypto';
import { supabase } from './supabase';

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
    const { data, error } = await supabase.from('payments').select('*');
    // .returns<Database["public"]["Tables"]["payment"][]>()

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
    const { data, error } = await supabase
      .from('payments')
      .update(payment)
      .eq('id', payment.id)
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

async function insertPayment(payment: any) {
  try {
    const { data, error } = await supabase
      .from('payments')
      .insert(payment)
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

export {
  getDefaultPayment,
  getPayments,
  getPayment,
  insertPayment,
  updatePayment
};
