import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

import { CreateDocument } from "../api/auth";

export default function PATHDocumentForm() {
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit(async (values) => {
    //console.log(selectedObject);
    const combinedValues = {
      ...values,
    };
    console.log(combinedValues);
    CreateDocument(combinedValues);
  });

  return (
    <form
      className="bg-white shadow-md rounded-md p-4 space-y-4 w-1/2"
      onSubmit={onSubmit}
    >
      <label
        className={
          "block text-lg font-medium leading-6 text-gray-900 uppercase text-center py-4"
        }
      >
        Formulario de Documento PATH
      </label>

      {/* informacion general de los compradores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="px-4 py-2">
          <FormInput
            className="uppercase"
            labelName="Información del padre"
            values={register("name")}
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del padre"
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
            labelName="Información de la madre"
            values={register("name1")}
            type="text"
            name="name1"
            id="name1"
            placeholder="Nombre de la madre"
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

      <div className="flex px-2">
        <div className="w-1/3 mx-2">
          <FormInput
            className="uppercase"
            labelName="Información General"
            values={register("ubicacion", { required: true })}
            type="text"
            name="ubicacion"
            id="ubicacion"
            placeholder="Ubicacion del lote"
            required
          />
        </div>

        <div className="w-1/3 mx-2">
          <FormInput
            labelName="1"
            labelClass="text-white"
            values={register("metros", { required: true })}
            type="text"
            name="metros"
            id="metros"
            placeholder="Area en metros"
            required
          />
        </div>

        <div className="w-1/3 mx-2">
        <FormInput
            labelName="1"
            labelClass="text-white"
            values={register("varas", { required: true })}
            type="text"
            name="varas"
            id="varas"
            placeholder="Area en varas"
            required
          />
        </div>
      </div>


      


      {/* informacion general del lote */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Side */}
        <div className="px-4 py-2">
          <FormInput
            className="uppercase"
            labelName="Colindancias"
            values={register("rumbo1")}
            type="text"
            name="rumbo1"
            id="rumbo1"
            placeholder="Rumbo (1-2)"
            required
          />

          <FormInput
            values={register("rumbo2")}
            type="text"
            name="rumbo2"
            id="rumbo2"
            placeholder="Rumbo (2-3)"
            required
          />

          <FormInput
            values={register("rumbo3")}
            type="text"
            name="rumbo3"
            id="rumbo3"
            placeholder="Rumbo (3-4)"
            required
          />

          <FormInput
          
            values={register("rumbo4")}
            type="text"
            name="rumbo4"
            id="rumbo4"
            placeholder="Rumbo (4-1)"
            required
          />

        </div>

        {/* Central Side */}
        <div className="px-4 py-2">
        <FormInput
            labelClass="text-white"
            labelName="Colindancias"
            values={register("Norte")}
            type="text"
            name="Norte"
            id="Norte"
            placeholder="Norte"
            required
          />

          <FormInput
            values={register("Sur")}
            type="text"
            name="Sur"
            id="Sur"
            placeholder="Sur"
            required
          />

          <FormInput
            values={register("Este")}
            type="text"
            name="Este"
            id="Este"
            placeholder="Este"
            required
          />

          <FormInput
          
            values={register("Oeste")}
            type="text"
            name="Oeste"
            id="Oeste"
            placeholder="Oeste"
            required
          /> 
        </div>

                {/* right Side */}
                <div className="px-4 py-2">
          <FormInput
            labelClass="text-white"
            labelName="1"
            values={register("colindante_norte")}
            type="text"
            name="colindante_norte"
            id="colindante_norte"
            placeholder="Colindante Norte"
            required
          />

          <FormInput
            values={register("colindante_sur")}
            type="text"
            name="colindante_sur"
            id="colindante_sur"
            placeholder="colindante Sur"
            required
          />

          <FormInput
            values={register("colindante_este")}
            type="text"
            name="colindante_este"
            id="colindante_este"
            placeholder="Colindante Este"
            required
          />

          <FormInput
          
            values={register("colindante_oeste")}
            type="text"
            name="colindante_oeste"
            id="colindante_oeste"
            placeholder="Colindante Oeste"
            required
          />

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
