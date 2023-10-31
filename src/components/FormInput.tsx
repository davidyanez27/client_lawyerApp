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
  onChange?:any;
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
  onChange
}) => {
  return (
    <div className="sm:col-span-3">
      <label
        className={`block text-sm font-medium leading-6 text-gray-900 uppercase mb-3  ${
          labelClass || ""
        }`}
      >
        {labelName}
      </label>

    

      <div className="mt-2">
        <input
          className={`block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-black${
            className || ""
          }`}
          {...values}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={onChange}          
        />


      </div>
    </div>

    // <div className="grid gap-2">
    //   <label className={`uppercase tracking-wide text-black text-xs font-bold p-2 mt-2 ${labelClass || ""}`}
    //   >
    //     {labelName}
    //   </label>

    //   <input
    //     className={`p-2 mt-1 mb-3 rounded-xl border text-black ${className || ""}`}
    //     {...values}
    //     type={type}
    //     name={name}
    //     id={id}
    //     placeholder={placeholder}
    //     required={required}
    //   />
    // </div>
  );
};

export default FormInput;
