import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  values?: any;
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  labelName?: string;
  labelClass?: string;
  onChange?: any;
  leftPlaceholder?: string;
  rightPlaceholder?: string;
  leftLabel?: string;
  rightLabel?: string;
}

const { register } = useForm();

const FormInput: React.FC<Props> = ({
  rightPlaceholder,
  leftPlaceholder,
  leftLabel,
  rightLabel,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="px-4 py-2">
        <FormInput
          className="uppercase"
          labelName={leftLabel}
          values={register("name")}
          type="text"
          name="name"
          id="name"
          placeholder={leftPlaceholder}
          required={false}
        />

        <FormInput
          values={register("job")}
          type="text"
          name="job"
          id="job"
          placeholder="Profesion"
          required={false}
        />

        <FormInput
          values={register("nationality")}
          type="text"
          name="nationality"
          id="nationality"
          placeholder="Nacionalidad"
          required={false}
        />

        <FormInput
          labelClass="hidden"
          values={register("address")}
          type="text"
          name="address"
          id="address"
          placeholder="Domicilio"
          required={false}
        />

        <FormInput
          labelClass="hidden"
          values={register("id")}
          type="text"
          name="id"
          id="id"
          placeholder="id"
          required={false}
        />

        <select
          className="p-2 mt-2 rounded-xl border text-black"
          id="marital_status"
          {...register("marital_status")}
        >
          <option value={"soltero"}></option>
          <option value={"soltero"}>soltero</option>
          <option value={"soltero en union libre"}>
            soltero en union libre
          </option>
          <option value={"casado"}>casado</option>
        </select>
      </div>

      {/* Right Side */}
      <div className="px-4 py-2">
        <FormInput
          className="uppercase"
          labelName={rightLabel}
          values={register("name1")}
          type="text"
          name="name1"
          id="name1"
          placeholder={rightPlaceholder}
          required={false}
        />

        <FormInput
          values={register("job1")}
          type="text"
          name="job1"
          id="job1"
          placeholder="Profesion"
          required={false}
        />

        <FormInput
          values={register("nationality1")}
          type="text"
          name="nationality1"
          id="nationality1"
          placeholder="Nacionalidad"
          required={false}
        />

        <FormInput
          labelClass="hidden"
          values={register("address1")}
          type="text"
          name="address1"
          id="address1"
          placeholder="Domicilio"
          required={false}
        />

        <FormInput
          labelClass="hidden"
          values={register("id1")}
          type="text"
          name="id1"
          id="id1"
          placeholder="id"
          required={false}
        />

        <select
          className="p-2 mt-2 rounded-xl border text-black"
          id="marital_status1"
          {...register("marital_status1")}
        >
          <option value={""}></option>
          <option value={"soltera"}>soltera</option>
          <option value={"soltera en union libre"}>
            soltera en union libre
          </option>
          <option value={"casada"}>casada</option>
        </select>
      </div>
    </div>
  );
};

export default FormInput;
