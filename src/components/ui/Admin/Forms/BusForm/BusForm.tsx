'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deleteBus,
  getDefaultBus,
  insertBus,
  updateBus
} from '@/lib/supabase/buses';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';

export interface BusProps {
  bus?: any;
}

const BusForm: FC<BusProps> = ({ bus }) => {
  const [formData, setFormData] = useState<any>(bus || getDefaultBus());

  const handleSubmit = async () => {
    const promise = formData.id
      ? await updateBus(formData)
      : await insertBus(formData);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };

  const handleDelete = async () => {
    const promise = await deleteBus(formData.id);
    if (promise) alert('Erfolgreich gelöscht');
    else alert('Fehler beim löschen');
  };
  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title={`Bus #${formData.id ? formData.id : 'new'}`}
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

export { BusForm };
