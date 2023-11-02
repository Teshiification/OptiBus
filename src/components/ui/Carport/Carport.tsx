'use client';
import { Bus } from '@/lib/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Session } from 'next-auth';
import { FC, useEffect, useState } from 'react';

export interface CarportProps {
  id?: number;
  newEntry?: boolean;
  session?: Session;
}

const Carport: FC<CarportProps> = (props: CarportProps) => {
  if (!props.session) return <>Missing session - Relogin!</>;
  const [busData, setData] = useState<Bus>();
  const [busNumber, setNumber] = useState<number>(0);
  const [busCapacity, setCapacity] = useState<number>(0);
  const [busModel, setModel] = useState<string>('');
  const [busYear, setYear] = useState<number>(2000);
  const [busTuev, setTuev] = useState<string>('2000-01-01');

  useEffect(() => {
    if (!props.id) return;
    async function FetchData() {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase
        .from('Buses')
        .select('*')
        .eq('bus_id', props.id)
        .single();
      if (error) return;

      setData(data as Bus);
      setNumber(data.bus_number);
      setCapacity(data.capacity);
      setModel(data.model);
      setYear(data.year);
      setTuev(data.tuev.toString());
    }
    FetchData();
  }, [props]);

  const handleSubmit = async () => {
    const supabase = createClientComponentClient();
    let newData: Bus = {};
    newData.bus_number = busNumber;
    newData.capacity = busCapacity;
    newData.model = busModel;
    newData.tuev = new Date(busTuev);
    newData.year = busYear;

    if (props?.newEntry) {
      const { data, error } = await supabase.from('Buses').insert([newData]);
      alert(error || 'Erfolgreich erstellt');
    } else {
      const { data, error } = await supabase
        .from('Buses')
        .update(newData)
        .eq('bus_id', busData?.bus_id);
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
      <div className={containerClassName}>
        <label className={labelClassName}>Bus Nummer</label>
        <input
          className={inputClassName}
          type="number"
          step="1"
          min={0}
          max={999}
          value={busNumber}
          onChange={(e) => setNumber(Number(e.target.value))}
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
          max={999}
          value={busCapacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>Model</label>
        <input
          className={inputClassName}
          type="text"
          placeholder="z.B. Mercedes Benz O 6050"
          value={busModel}
          onChange={(e) => setModel(e.target.value)}
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
          max={new Date().getFullYear()}
          value={busYear}
          onChange={(e) => setYear(Number(e.target.value))}
          required
        />
      </div>

      <div className={containerClassName}>
        <label className={labelClassName}>TÜV</label>
        <input
          className={inputClassName}
          type="date"
          min={1900}
          required
          value={busTuev?.toString()}
          onChange={(e) => setTuev(e.target.value)}
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
