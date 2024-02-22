'use client';
import { FormInput } from '@/components/core/form-input';
import { SubmitButton } from '@/components/ui/SubmitButton';
import {
  deleteEmployee,
  getDefaultEmployee,
  insertEmployee,
  updateEmployee
} from '@/lib/supabase/employees';
import React, { FC, useState } from 'react';
import { Form } from '../Form';
import { DeleteButton } from '@/components/ui/DeleteButton';

export interface EmployeeProps {
  employee?: any;
}

const EmployeeForm: FC<EmployeeProps> = ({ employee }) => {
  const [formData, setFormData] = useState<any>(
    employee || getDefaultEmployee()
  );

  const handleSubmit = async () => {
    const promise = formData.id
      ? await updateEmployee(formData)
      : await insertEmployee(formData);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };
  const handleDelete = async () => {
    const promise = await deleteEmployee(formData.id);
    if (promise) alert('Erfolgreich gespeichert');
    else alert('Fehler beim speichern');
  };
  const handleInputChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title={`Employee #${formData.id ? formData.id : 'new'}`}
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

export { EmployeeForm };
