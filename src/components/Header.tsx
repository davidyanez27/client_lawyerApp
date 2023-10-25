import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export default function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className="bg-white shadow-md rounded-md p-4 space-y-4"
      onSubmit={handleSubmit(async (values) => {
        console.log(values);
      })}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="p-4">
          <FormInput
            labelName="Información del padre"
            values={register("name", { required: true })}
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del padre"
            required
          />

          <FormInput
            labelClass="hidden"
            values={register("address", { required: true })}
            type="text"
            name="address"
            id="address"
            placeholder="Domicilio"
            required
          />

          <FormInput
            labelClass="hidden"
            values={register("id", { required: true })}
            type="text"
            name="id"
            id="id"
            placeholder="ID"
            required
          />

          <select
            className="p-2 mt-2 rounded-xl border text-black"
            id="maritalState"
            {...register("state")}
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
        <div className="p-4">
          <FormInput
            labelName="Información de la madre"
            values={register("name1", { required: true })}
            type="text"
            name="name1"
            id="name1"
            placeholder="Nombre de la madre"
            required
          />

          <FormInput
            labelClass="hidden"
            values={register("address1", { required: true })}
            type="text"
            name="address1"
            id="address1"
            placeholder="Domicilio"
            required
          />

          <FormInput
            labelClass="hidden"
            values={register("ID1", { required: true })}
            type="text"
            name="father_ID"
            id="father_ID"
            placeholder="ID"
            required
          />

          <select
            className="p-2 mt-2 rounded-xl border text-black"
            id="maritalState"
            {...register("state1")}
          >
            <option value={"soltero"}></option>
            <option value={"soltero"}>soltero</option>
            <option value={"soltero en union libre"}>
              soltero en union libre
            </option>
            <option value={"casado"}>casado</option>
          </select>
        </div>
      </div>

      <div className="flex px-4">
        <div className="w-1/3 mx-2">
          <FormInput
            labelName="Datos del menor"
            values={register("son_name", { required: true })}
            type="text"
            name="son_name"
            id="son_name"
            placeholder="Nombre del menor"
            required
          />
        </div>
        <div className="w-1/3 mx-2">
          <FormInput
            labelName="1"
            labelClass="text-white"
            values={register("document_number", { required: true })}
            type="text"
            name="document_number"
            id="document_number"
            placeholder="Identidad del menor"
            required
          />
        </div>
        <div className="w-1/3 mx-2">
          <select
            className="p-2 mt-8 rounded-xl border text-black"
            id="maritalState"
            {...register("document_type")}
          >
            <option value={"Acta de nacimiento"}></option>
            <option value={"Identidad"}>Identidad</option>
            <option value={"Pasaporte"}>Pasaporte</option>
            <option value={"Acta de nacimiento"}>Acta de nacimiento</option>
          </select>
        </div>
      </div>

      <div className="flex px-4">
        <div className="w-1/3 mx-2">
          <FormInput
            values={register("son_name1", { required: true })}
            type="text"
            name="son_name1"
            id="son_name1"
            placeholder="Nombre del menor"
            required
          />
        </div>
        <div className="w-1/3 mx-2">
          <FormInput
            values={register("document_number1", { required: true })}
            type="text"
            name="document_number1"
            id="document_number1"
            placeholder="Identidad del menor"
            required
          />
        </div>
        <div className="w-1/3 mx-2">
          <select
            className="p-2 mt-2 rounded-xl border text-black"
            id="maritalState"
          >
            <option ></option>
            <option>Identidad</option>
            <option>Pasaporte</option>
            <option>Acta de nacimiento</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="flex w-1/3 mx-auto py-2 justify-center rounded-xl bg-gray-400 uppercase text-white hover:scale-110 duration-300"
      >
        Crear
      </button>
    </form>
  );
}
