'use client';
import { Driver } from '@/lib/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FC, useEffect, useState } from 'react';
import Form from '@/components/Form';
import FormGenerator, {
  GenerateInputField
} from '@/components/core/FormGenerator/FormGenerator';
import { DriverProps } from './Driver';

const defaultData = {
  first_name: 'Max',
  last_name: 'Mustermann',
  license_date: new Date('2000-01-01'),
  license_number: 0,
  status: false,
  tel_number: '+49 0123 12345678'
};

const NewDriver: FC<DriverProps> = (props: DriverProps) => {
  if (!props.session) return <>Missing session - Relogin!</>;
  const [firstName, setFirstName] = useState<string>(defaultData.first_name);
  const [lastName, setLastName] = useState<string>(defaultData.last_name);
  const [licenseNumber, setLicenseNumber] = useState<number>(
    defaultData.license_number
  );
  const [licenseDate, setLicenseDate] = useState<Date>(
    defaultData.license_date
  );
  const [telNumber, setTelNumber] = useState<string>(defaultData.tel_number);
  const [status, setStatus] = useState<boolean>(defaultData.status);

  const handleSubmit = async () => {
    const supabase = createClientComponentClient();

    let newData: Driver = {};
    newData.first_name = firstName;
    newData.last_name = lastName;
    newData.license_number = licenseNumber;
    newData.license_date = new Date(licenseDate);
    newData.tel_number = telNumber;
    newData.status = status;

    const { data, error } = await supabase.from('driveres').insert([newData]);
    alert(error || 'Erfolgreich erstellt');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 h-full w-full flex flex-col justify-around place-items-center justify-items-center gap-2"
    >
      {GenerateInputField('Aktiv', status, (value: boolean) =>
        setStatus(value)
      )}
      {GenerateInputField('Vorname', firstName, (value) =>
        setFirstName(value.target.value)
      )}
      {GenerateInputField('Nachname', lastName, (value) =>
        setLastName(value.target.value)
      )}
      {GenerateInputField('Fahrerlaubnis Nummer', licenseNumber, (value) =>
        setLicenseNumber(Number(value.target.value))
      )}
      {GenerateInputField('Fahrerlaubnis Datum', licenseDate, (value) =>
        setLicenseDate(new Date(value.target.value))
      )}
      {GenerateInputField('Telefon Nummer', telNumber, (value) =>
        setTelNumber(value.target.value)
      )}

      <button
        type="submit"
        className="w-full justify-self-end p-2 bg-green-600 hover:bg-green-500 rounded"
      >
        Erstellen
      </button>
    </form>
  );
};

export default NewDriver;
