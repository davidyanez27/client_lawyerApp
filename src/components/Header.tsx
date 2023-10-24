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
    <form className="bg-white rounded-md p-4 space-y-4">
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
          >
            <option></option>
            <option>soltero</option>
            <option>soltero en union libre</option>
            <option>casado</option>
          </select>
        </div>

        {/* Right Side */}
        <div className="p-4">
          <FormInput
            labelName="Información de la madre"
            values={register("name1", { required: true })}
            type="text"
            name="madre"
            id="madre"
            placeholder="Nombre de la madre"
            required
          />

          <FormInput
            labelClass="hidden"
            values={register("address", { required: true })}
            type="text"
            name="father_address"
            id="father_address"
            placeholder="Domicilio"
            required
          />

          <FormInput
            labelClass="hidden"
            values={register("ID", { required: true })}
            type="text"
            name="father_ID"
            id="father_ID"
            placeholder="ID"
            required
          />

          <select
            className="p-2 mt-2 rounded-xl border text-black"
            id="maritalState"
          >
            <option></option>
            <option>soltero</option>
            <option>soltero en union libre</option>
            <option>casado</option>
          </select>
        </div>
      </div>

      <div className="md:flex px-4">
        <div className="w-1/3 mx-2">
          <FormInput
            labelName="Menor"
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
            values={register("son_name", { required: true })}
            type="text"
            name="son_name"
            id="son_name"
            placeholder="Nombre del menor"
            required
          />
        </div>
      </div>

      <div className="flex px-4">
        <div className="w-1/3 mx-2">
          <FormInput
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
            values={register("son_name", { required: true })}
            type="text"
            name="son_name"
            id="son_name"
            placeholder="Nombre del menor"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex w-1/3 mx-auto py-2 justify-center rounded-xl bg-gray-400 uppercase text-white hover:scale-110 duration-300"
      >
        Create 
      </button>
    </form>

    // <form className="w-5/6">
    //   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    //     {/* Father Information*/}
    //     <div className="mx-3 md:flex mb-6">
    //       <div className="md:w-1/2 px-3 ">
    //         <FormInput
    //           labelName="Información del padre"
    //           values={register("name", { required: true })}
    //           type="text"
    //           name="name"
    //           id="name"
    //           placeholder="Nombre del padre"
    //           required
    //         />

    //         <FormInput
    //           labelClass="hidden"
    //           values={register("address", { required: true })}
    //           type="text"
    //           name="address"
    //           id="address"
    //           placeholder="Domicilio"
    //           required
    //         />

    //         <FormInput
    //           labelClass="hidden"
    //           values={register("id", { required: true })}
    //           type="text"
    //           name="id"
    //           id="id"
    //           placeholder="ID"
    //           required
    //         />

    //         <select
    //           className="p-2 mt-1 mb-3 rounded-xl border text-black"
    //           id="maritalState"
    //         >
    //           <option></option>
    //           <option>soltero</option>
    //           <option>soltero en union libre</option>
    //           <option>casado</option>
    //         </select>
    //       </div>

    //       {/* father information  */}
    //       <div className="md:w-1/2 px-3 ">
    //         <FormInput
    //           labelName="Información de la madre"
    //           values={register("name1", { required: true })}
    //           type="text"
    //           name="madre"
    //           id="madre"
    //           placeholder="Nombre de la madre"
    //           required
    //         />

    //         <FormInput
    //           labelClass="hidden"
    //           values={register("address", { required: true })}
    //           type="text"
    //           name="father_address"
    //           id="father_address"
    //           placeholder="Domicilio"
    //           required
    //         />

    //         <FormInput
    //           labelClass="hidden"
    //           values={register("ID", { required: true })}
    //           type="text"
    //           name="father_ID"
    //           id="father_ID"
    //           placeholder="ID"
    //           required
    //         />

    //         <select
    //           className="p-2 mt-1 mb-3 rounded-xl border text-black"
    //           id="maritalState"
    //         >
    //           <option></option>
    //           <option>soltero</option>
    //           <option>soltero en union libre</option>
    //           <option>casado</option>
    //         </select>
    //       </div>
    //     </div>

    //     {/* Kids Information  */}
    //     <div className="p-2 flex mb-2">
    //       <div className="md:w-1/2 px-3 mb-6 md:mb-0">
    //         <FormInput
    //           values={register("son_name", { required: true })}
    //           type="text"
    //           name="son_name"
    //           id="son_name"
    //           placeholder="Nombre del menor"
    //           required
    //         />
    //       </div>
    //       <div className="md:w-1/2 px-3">
    //         <FormInput
    //           labelName="1"
    //           labelClass="text-white"
    //           values={register("ID", { required: true })}
    //           type="text"
    //           name="father_ID"
    //           id="father_ID"
    //           placeholder="ID"
    //           required
    //         />
    //       </div>
    //       <div className="md:w-1/2 px-3">
    //         <div>
    //           <br />
    //           <br />

    //           <select
    //             className="p-2 mt-1 mb-3 rounded-xl border text-black"
    //             id="maritalState"
    //           >
    //             <option></option>
    //             <option>soltero</option>
    //             <option>soltero en union libre</option>
    //             <option>casado</option>
    //           </select>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="p-2 flex mb-2">
    //       <div className="md:w-1/2 px-3 mb-6 md:mb-0">
    //         <FormInput
    //           labelName="Información del menor"
    //           values={register("son_name", { required: true })}
    //           type="text"
    //           name="son_name"
    //           id="son_name"
    //           placeholder="Nombre del menor"
    //           required
    //         />
    //       </div>
    //       <div className="md:w-1/2 px-3">
    //         <FormInput
    //           labelName="1"
    //           labelClass="text-white"
    //           values={register("ID", { required: true })}
    //           type="text"
    //           name="father_ID"
    //           id="father_ID"
    //           placeholder="ID"
    //           required
    //         />
    //       </div>
    //       <div className="md:w-1/2 px-3">
    //         <div>
    //           <br />
    //           <br />

    //           <select
    //             className="p-2 mt-1 mb-3 rounded-xl border text-black"
    //             id="maritalState"
    //           >
    //             <option></option>
    //             <option>soltero</option>
    //             <option>soltero en union libre</option>
    //             <option>casado</option>
    //           </select>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="-mx-3 md:flex mt-2">
    //       <div className="md:w-full px-3">
    //         <button
    //           type="submit"
    //           className="flex w-3/4 mx-auto justify-center rounded-xl bg-gray-600 py-2 hover:scale-110 duration-300"
    //         >
    //           Register
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
}
