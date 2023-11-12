'use client';
import React from 'react';

interface FormProps {
  title: string;
  value: any;
  setData: (value: any) => void;
}

const containerClassName = 'w-full';
const labelClassName =
  'flex flex-col rounded pt-1 w-full bg-white/10 text-gray-400 italic text-clip px-2';
const inputClassName = 'bg-white/5 text-gray-100 rounded h-10 pl-1';

const Form = (props: FormProps) => {
  const GenerateInput = () => {
    return typeof props.value === 'number'
      ? GenerateNumberInput(props.value, props.setData)
      : typeof props.value === 'boolean'
      ? GenerateBooleanInput(props.value, props.setData)
      : GenerateStringInput(props.value, props.setData);
  };

  return (
    <div className={containerClassName}>
      <label className={labelClassName}>
        {props.title}
        <GenerateInput key={props.title} />
      </label>
    </div>
  );
};

function GenerateNumberInput(value: any, setData: (value: any) => void) {
  return (
    <input
      className={inputClassName}
      type="number"
      step="1"
      min={0}
      value={value}
      onChange={(e) => setData(Number(e.target.value))}
      required
    />
  );
}

function GenerateStringInput(value: any, setData: (value: any) => void) {
  return (
    <input
      className={inputClassName}
      type="text"
      value={value}
      onChange={(e) => setData(e.target.value)}
      required
    />
  );
}

function GenerateBooleanInput(value: any, setData: (value: any) => void) {
  return (
    <input
      className={inputClassName}
      type="checkbox"
      checked={value}
      onChange={(e) => setData(e.target.checked)}
      required
    />
  );
}

export default Form;
