'use client';
import Form from '@/components/Form';
import FormGenerator, {
  GenerateInputField
} from '@/components/core/FormGenerator/FormGenerator';
import { Driver } from '@/lib/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Session } from 'next-auth';
import { FC, useEffect, useState } from 'react';

export interface DriverProps {
  id?: number;
  session?: Session;
}

const Driver: FC<DriverProps> = (props: DriverProps) => {
  if (!props.session) return <>Missing session - Relogin!</>;

  const [driverData, setData] = useState<Driver>();
  const [firstName, setFirstName] = useState<string>('Max');
  const [lastName, setLastName] = useState<string>('Mustermann');
  const [licenseNumber, setLicenseNumber] = useState<number>(0);
  const [licenseDate, setLicenseDate] = useState<Date>(new Date('2000-01-01'));
  const [telNumber, setTelNumber] = useState<string>('+490000000000');
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    if (!props.id) return;
    async function FetchData() {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase
        .from('Drivers')
        .select('*')
        .eq('driver_id', props.id)
        .single();
      if (error) return;

      setData(data as Driver);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setLicenseNumber(data.license_number);
      setLicenseDate(data.license_date);
      setTelNumber(data.tel_number);
      setStatus(data.status);
    }
    FetchData();
  }, [props]);

  const handleSubmit = async () => {
    const supabase = createClientComponentClient();
    let newData: Driver = {};
    newData.first_name = firstName;
    newData.last_name = lastName;
    newData.license_number = licenseNumber;
    newData.license_date = new Date(licenseDate);
    newData.tel_number = telNumber;
    newData.status = status;

    const { data, error } = await supabase
      .from('driveres')
      .update(newData)
      .eq('driver_id', driverData?.driver_id);
    alert(error || 'Erfolgreich gespeichert');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 h-full w-full flex flex-col justify-around place-items-center justify-items-center gap-2"
    >
      {GenerateInputField('Aktiv', status, (value) =>
        setStatus(Boolean(value.target.value))
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
        Speichern
      </button>
    </form>
  );
};

export default Driver;
