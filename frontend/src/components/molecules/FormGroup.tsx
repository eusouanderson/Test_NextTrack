'use client';

import { ReactNode } from 'react';
import Input from '../atoms/Input';

interface FormGroupProps {
  id: string;
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children?: ReactNode;
}

export default function FormGroup({
  id,
  label,
  name,
  type,
  value,
  onChange,
  required = false,
  children,
}: FormGroupProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
      {children}
    </div>
  );
}