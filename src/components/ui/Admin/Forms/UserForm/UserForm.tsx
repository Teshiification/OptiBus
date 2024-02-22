'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deleteUser,
  getDefaultUser,
  insertUser,
  updateUser
} from '@/lib/supabase/users';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';

export interface UserProps {
  user?: any;
}

const UserForm: FC<UserProps> = ({ user }) => {
  const [formData, setFormData] = useState<any>(user || getDefaultUser());

  const handleSubmit = async () => {
    const promise = formData.id
      ? await updateUser(formData)
      : await insertUser(formData);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };

  const handleDelete = async () => {
    const promise = await deleteUser(formData.id);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title={`User #${formData.id ? formData.id : 'new'}`}
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
      <div className="flex gap-4">
        <SubmitButton onClick={handleSubmit} />
        {formData.id && <DeleteButton onClick={handleDelete} />}
      </div>
    </Form>
  );
};

export { UserForm };
