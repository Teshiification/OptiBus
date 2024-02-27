'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deleteDriver,
  getDefaultDriver,
  insertDriver,
  updateDriver
} from '@/lib/supabase/drivers';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';

export interface DriverProps {
  driver?: any;
}

const DriverForm: FC<DriverProps> = ({ driver }) => {
  const [formData, setFormData] = useState<any>(driver || getDefaultDriver());

  const handleSubmit = async () => {
    const promise = formData.id
      ? await updateDriver(formData)
      : await insertDriver(formData);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };
  const handleDelete = async () => {
    const promise = await deleteDriver(formData.id);
    if (promise) alert('Erfolgreich gelöscht');
    else alert('Fehler beim löschen');
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title={`Driver #${formData.id ? formData.id : 'new'}`}
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

export { DriverForm };
