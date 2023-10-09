// FormInput.tsx

import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  values: any;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<Props> = ({
  values,
  type,
  name,
  id,
  placeholder,
  required,
  className
}) => {
  return (
    <input
      className={`p-2 mt-2 rounded-xl border text-black ${className || ''}`}
      {...values}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default FormInput;
