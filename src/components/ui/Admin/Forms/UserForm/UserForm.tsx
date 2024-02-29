'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  User,
  deleteUser,
  getDefaultUser,
  insertUser,
  updateUser
} from '@/lib/supabase/users';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';
import { toast } from 'react-toastify';

export interface UserProps {
  user?: User;
}

const UserForm: FC<UserProps> = ({ user }) => {
  const [formData, setFormData] = useState<any>(user || getDefaultUser());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = formData.id
      ? await updateUser(formData)
      : await insertUser(formData);
    if (promise) toast.success('Erfolgreich gespeichert');
    else toast.error('Fehler beim speichern');
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = await deleteUser(formData.id);
    if (promise) toast.success('Erfolgreich gelöscht');
    else toast.error('Fehler beim löschen');
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
        <SubmitButton />
        {formData.id && <DeleteButton onClick={handleDelete} />}
      </div>
    </Form>
  );
};

export { UserForm };
