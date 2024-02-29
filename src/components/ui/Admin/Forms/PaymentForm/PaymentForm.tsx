'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deletePayment,
  getDefaultPayment,
  insertPayment,
  updatePayment
} from '@/lib/supabase/payments';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';
import { toast } from 'react-toastify';

export interface PaymentProps {
  payment?: any;
}

const PaymentForm: FC<PaymentProps> = ({ payment }) => {
  const [formData, setFormData] = useState<any>(payment || getDefaultPayment());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = formData.id
      ? await updatePayment(formData)
      : await insertPayment(formData);
    if (promise) toast.success('Erfolgreich gespeichert');
    else toast.error('Fehler beim speichern');
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = await deletePayment(formData.id);
    if (promise) toast.success('Erfolgreich gelöscht');
    else toast.error('Fehler beim löschen');
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title={`Payment #${formData.id ? formData.id : 'new'}`}
    >
      {Object.keys(formData).map((key) => (
        <FormInput
          key={key}
          name={key}
          handleChange={handleInputChange}
          value={formData[key]}
          required
        />
      ))}

      <SubmitButton />

      {formData.id && <DeleteButton onClick={handleDelete} />}
    </Form>
  );
};

export { PaymentForm };
