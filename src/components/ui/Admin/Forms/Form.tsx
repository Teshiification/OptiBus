'use client';
import { FC, HTMLProps, FormEvent } from 'react';
import { Card, CardContent, CardHeader } from '../../card';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  title: string;
}

const Form: FC<FormProps> = ({
  onSubmit,
  title,
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex size-full flex-col p-4">
      <h2 className="text-2xl font-bold tracking-tight underline decoration-primary decoration-4 underline-offset-4">
        {title}
      </h2>
      <form
        onSubmit={onSubmit}
        className={`flex flex-col flex-wrap justify-center gap-4 md:flex-row p-10 size-full items-center ${className}`}
        {...props}
      >
        {children}
      </form>
    </div>
  );
};

export { Form };
