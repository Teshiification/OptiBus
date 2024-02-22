'use client';
import { FC, ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CopyToClipboardButton from '../ui/clipboard-button';

export interface FormInputProps {
  name: string;
  value: any;
  handleChange: (name: string, value: any) => void;
  className?: string;
  required?: boolean;
}

const FormInput: FC<FormInputProps> = ({
  name,
  value,
  handleChange,
  className
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(name, e.target.value);
  };

  const onChangeDatePicker = (date: Date | null) => {
    handleChange(name, date);
  };

  const inputType =
    typeof value === 'number'
      ? 'number'
      : typeof value === 'object' && value instanceof Date
      ? 'date'
      : 'text';

  return (
    <div className={`flex flex-col w-full gap-1 rounded-md ${className}`}>
      <p
        className={
          'flex flex-col rounded py-1 w-full text-primary italic text-clip px-2'
        }
      >
        {name.toUpperCase()}
      </p>
      {inputType === 'date' ? (
        <DatePicker
          selected={value}
          onChange={onChangeDatePicker}
          className={
            'bg-background text-primary dark:focus:bg-primary dark:text-secondary-foreground rounded-md h-10 w-full px-2 border-2 border-accent disabled:cursor-not-allowed'
          }
          disabled={name === 'id'}
        />
      ) : (
        <div className="relative">
          {(name === 'id' || name.includes('_id')) && (
            <CopyToClipboardButton
              value={value}
              className="absolute h-full align-middle right-0"
            />
          )}
          <input
            className={
              'bg-background text-primary dark:focus:bg-primary dark:text-secondary-foreground rounded-md h-10 w-full px-2 border-2 border-accent disabled:cursor-not-allowed'
            }
            value={value}
            onChange={onChange}
            disabled={name === 'id'}
            type={inputType}
          />
        </div>
      )}
    </div>
  );
};

export { FormInput };
