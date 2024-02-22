'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deleteBooking,
  getDefaultBooking,
  insertBooking,
  updateBooking
} from '@/lib/supabase/bookings';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';

export interface BookingProps {
  booking?: any;
  className?: string;
}

const BookingForm: FC<BookingProps> = ({ booking, className }) => {
  const [formData, setFormData] = useState<any>(booking || getDefaultBooking());

  const handleSubmit = async () => {
    const promise = formData.id
      ? await updateBooking(formData)
      : await insertBooking(formData);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };

  const handleDelete = async () => {
    const promise = await deleteBooking(formData.id);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className={className}>
      <Form
        onSubmit={handleSubmit}
        title={`Booking #${formData.id ? formData.id : 'new'}`}
        className={className}
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

        <SubmitButton onClick={handleSubmit} />
        {formData.id && <DeleteButton onClick={handleDelete} />}
      </Form>
    </div>
  );
};

export { BookingForm };
