'use client';
import { Form } from '@/components/Form';
import { Driver } from '@/lib/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Session } from 'next-auth';
import { FC, useEffect, useState } from 'react';

export interface DriverProps {
  id?: number;
  newEntry?: boolean;
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

    if (props?.newEntry) {
      const { data, error } = await supabase.from('driveres').insert([newData]);
      alert(error || 'Erfolgreich erstellt');
    } else {
      const { data, error } = await supabase
        .from('driveres')
        .update(newData)
        .eq('driver_id', driverData?.driver_id);
      alert(error || 'Erfolgreich gespeichert');
    }
  };

  const containerClassName = 'flex flex-col gap-1';
  const labelClassName = 'text-xs italic text-slate-500';
  const inputClassName = 'w-80 bg-white/10 rounded p-1';

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 h-full w-full flex flex-col justify-around place-items-center justify-items-center gap-2"
    >
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
