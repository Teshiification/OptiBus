'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Toggle from '../Toggle/Toggle';

export type FormData = {
  [key: string]: string | number | boolean | FormData | FormData[];
};

export interface FormProps {
  title: string;
  data: FormData;
  className?: string;
  handleSubmit: (data: FormData) => void;
}

const FormGenerator: React.FC<FormProps> = (props) => {
  const { data, title, className } = props;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(data);
    props.handleSubmit(data);
  };
  return (
    <div className={`flex flex-col gap-2 w-fit select-none ${className}`}>
      <h1 className="text-xl font-semibold">{title}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-items-around gap-5 border-[1px] border-white/10 rounded p-4"
      >
        {generateFormElements(data)}
      </form>
      <input
        type="submit"
        value="Save"
        className="bg-green-700 hover:bg-green-600 px-2 py-1 rounded text-gray-100"
      />
    </div>
  );
};

export function GenerateInputField(
  key: string,
  value: string | number | boolean | Date,
  onChange: any
) {
  const type = typeof value;
  return (
    <div key={key} className="w-full">
      {type === 'boolean' ? (
        <Toggle
          text={key}
          value={Boolean(value)}
          onChange={(event: any) => onChange(event)}
        />
      ) : value instanceof Date ? (
        <label className="flex flex-col rounded pt-1 w-full bg-white/10 text-gray-400 italic text-clip px-2">
          {key}
          <input
            name={key}
            type={'date'}
            value={value.toISOString().split('T')[0]}
            onChange={onChange}
            className="bg-white/5 text-gray-100 rounded h-10 pl-1"
          />
        </label>
      ) : (
        <label className="flex flex-col rounded pt-1 w-full bg-white/10 text-gray-400 italic text-clip px-2">
          {key}
          <input
            name={key}
            type={type}
            //@ts-ignore
            value={value}
            onChange={onChange}
            className="bg-white/5 text-gray-100 rounded h-10 pl-1"
          />
        </label>
      )}
    </div>
  );
}

function generateFormElements(data: FormData) {
  if (!data) {
    return null;
  }
  return Object.keys(data).map((currentKey, index) => {
    if (index <= 1) return;
    if (typeof data[currentKey] !== 'object') {
      return GenerateInputField(
        currentKey,
        data[currentKey] as string | number | boolean,
        (event: any) => {
          const newValue =
            event.target.type === 'checkbox'
              ? event.target.checked
              : event.target.value;
          data[currentKey] = newValue;
        }
      );
    }
  });
}

export default FormGenerator;
