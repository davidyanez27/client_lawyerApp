// FormInput.tsx

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  values: any;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  labelName?: string;
  labelClass?: string;
}

const FormInput: React.FC<Props> = ({
  values,
  type,
  name,
  id,
  placeholder,
  required,
  className,
  labelName,
  labelClass,
}) => {
  return (
    <div className="grid gap-2">
      <label className={`uppercase tracking-wide text-black text-xs font-bold p-2 mt-2 ${labelClass || ""}`}
      >
        {labelName}
      </label>

      <input
        className={`p-2 mt-1 mb-3 rounded-xl border text-black ${className || ""}`}
        {...values}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;
