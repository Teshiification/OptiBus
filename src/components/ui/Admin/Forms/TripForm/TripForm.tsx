'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deleteTrip,
  getDefaultTrip,
  insertTrip,
  updateTrip
} from '@/lib/supabase/trips';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';

export interface TripProps {
  trip?: any;
}

const TripForm: FC<TripProps> = ({ trip }) => {
  const [formData, setFormData] = useState<any>(trip || getDefaultTrip());

  const handleSubmit = async () => {
    const promise = formData.id
      ? await updateTrip(formData)
      : await insertTrip(formData);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };
  const handleDelete = async () => {
    const promise = await deleteTrip(formData.id);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };
  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title={`Trip #${formData.id ? formData.id : 'new'}`}
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
  );
};

export { TripForm };
