'use client';
import React, { FC, useEffect, useState } from 'react';
import FormGenerator from '@/components/core/FormGenerator/FormGenerator';
import Toggle from '@/components/core/Toggle/Toggle';
import { Bus } from '@/lib/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Session } from 'next-auth';

export interface CarportProps {
  id?: number;
  newEntry?: boolean;
  session?: Session;
}

const initialBusData: Bus = {
  status: false,
  bus_number: 0,
  capacity: 0,
  model: '',
  licenseplate: '',
  year: 0,
  tuev: ''
};

const Carport: FC<CarportProps> = (props: CarportProps) => {
  const [busData, setBusData] = useState<Bus>(initialBusData);
  const [busStatus, setStatus] = useState<boolean>(initialBusData.status);
  const [busNumber, setNumber] = useState<number>(initialBusData.bus_number);
  const [busCapacity, setCapacity] = useState<number>(initialBusData.capacity);
  const [busLicenseplate, setLicensePlate] = useState<string>(
    initialBusData.licenseplate
  );
  const [busModel, setModel] = useState<string>(initialBusData.model);
  const [busYear, setYear] = useState<number>(initialBusData.year);
  const [busTuev, setTuev] = useState<string>(initialBusData.tuev);

  useEffect(() => {
    if (!props.id) return;
    async function fetchData() {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase
        .from('Buses')
        .select('*')
        .eq('bus_id', props.id)
        .single();
      if (error || !data) return;

      setBusData(data as Bus);
    }
    fetchData();
  }, [props.id, props.session]);

  useEffect(() => {
    setBusData(initialBusData);
    setStatus(initialBusData.status);
    setNumber(initialBusData.bus_number);
    setCapacity(initialBusData.capacity);
    setLicensePlate(initialBusData.licenseplate);
    setModel(initialBusData.model);
    setYear(initialBusData.year);
    setTuev(initialBusData.tuev);
  }, [busData]);

  const handleSubmit = async () => {
    if (!busData) return;

    const supabase = createClientComponentClient();

    if (props.newEntry) {
      const { data, error } = await supabase.from('Buses').insert([busData]);
      alert(error || 'Erfolgreich erstellt');
    } else {
      const { data, error } = await supabase
        .from('Buses')
        .update(busData)
        .eq('bus_id', busData.bus_id);
      alert(error || 'Erfolgreich gespeichert');
    }
  };

  const containerClassName = 'flex flex-col w-full gap-1';
  const labelClassName =
    'flex flex-col rounded py-1 w-full bg-white/10 text-gray-400 italic text-clip px-2';
  const inputClassName = 'bg-white/5 text-gray-100 rounded h-10 pl-1';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-2 px-10 my-auto h-full w-full"
    >
      {busData && (
        <Toggle
          text="Aktiv"
          value={busData.status}
          setter={(bool) => {
            setStatus(bool);
          }}
        />
      )}

      <div className={containerClassName}>
        <label className={labelClassName}>Bus Nummer</label>
        <input
          className={inputClassName}
          type="number"
          step="1"
          min={0}
          value={busData?.bus_number || ''}
          onChange={(e) => {
            setNumber(Number(e.target.value));
          }}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>Sitzplätze</label>
        <input
          className={inputClassName}
          type="number"
          step="1"
          min={0}
          value={busData?.capacity || ''}
          onChange={(e) => {
            setCapacity(Number(e.target.value));
          }}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>Model</label>
        <input
          className={inputClassName}
          type="text"
          placeholder="z.B. Mercedes Benz O 6050"
          value={busData?.model || ''}
          onChange={(e) => {
            setModel(e.target.value);
          }}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>Kennzeichen</label>
        <input
          className={inputClassName}
          type="text"
          placeholder="z.B. WI-AA-2000"
          value={busData?.licenseplate || ''}
          onChange={(e) => {
            setLicensePlate(e.target.value);
          }}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>Herstellungsjahr</label>
        <input
          className={inputClassName}
          type="number"
          step="1"
          min={1900}
          value={busData?.year || ''}
          onChange={(e) => {
            setYear(Number(e.target.value.split('-')[2]) || 0);
          }}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>TÜV</label>
        <input
          className={inputClassName}
          type="date"
          min="1900-01-01"
          value={busData.tuev || ''}
          onChange={(e) => {
            setTuev(e.target.value.toString());
          }}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full justify-self-end p-2 bg-green-600 hover:bg-green-500 rounded"
      >
        Speichern
      </button>
    </form>
  );
};

export default Carport;
