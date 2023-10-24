    // <div className="  bg-white p-5 rounded-xl border-b border-gray-900/10 ">
    //   <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
    //     <div className="sm:col-span-3">
    //       <div className="mt-2">
    //         <FormInput
    //           labelName="Información del padre"
    //           values={register("name", { required: true })}
    //           type="text"
    //           name="name"
    //           id="name"
    //           placeholder="Nombre del padre"
    //           required
    //         />
    //       </div>
    //     </div>

import FormInput from "./FormInput";

    //     <div className="sm:col-span-3">
    //       <div className="mt-2">
    //         <FormInput
    //           labelName="Información de la madre"
    //           values={register("name", { required: true })}
    //           type="text"
    //           name="name"
    //           id="name"
    //           placeholder="Nombre de la Madre"
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div className="sm:col-span-3">
    //       <div className="mt-2">
    //         <FormInput
    //           values={register("name", { required: true })}
    //           type="text"
    //           name="name"
    //           id="name"
    //           placeholder="Nombre del padre"
    //           required
    //         />
    //       </div>{" "}
    //     </div>

    //     <div className="sm:col-span-3">
    //       <div className="mt-2">
    //         <select
    //           id="country"
    //           name="country"
    //           autoComplete="country-name"
    //           className="block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
    //         >
    //           <option>soltero</option>
    //           <option>casado</option>
    //           <option>union libre</option>
    //         </select>
    //       </div>
    //     </div>

    //     <div className="col-span-full">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">
    //         Street address
    //       </label>
    //       <div className="mt-2">
    //         <input
    //           type="text"
    //           name="street-address"
    //           id="street-address"
    //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         />
    //       </div>
    //     </div>

    //     <div className="sm:col-span-2 sm:col-start-1">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">
    //         City
    //       </label>
    //       <div className="mt-2">
    //         <input
    //           type="text"
    //           name="city"
    //           id="city"
    //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         />
    //       </div>
    //     </div>

    //     <div className="sm:col-span-2">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">
    //         State / Province
    //       </label>
    //       <div className="mt-2">
    //         <input
    //           type="text"
    //           name="region"
    //           id="region"
    //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         />
    //       </div>
    //     </div>

    //     <div className="sm:col-span-2">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">
    //         ZIP / Postal code
    //       </label>
    //       <div className="mt-2">
    //         <input
    //           type="text"
    //           name="postal-code"
    //           id="postal-code"
    //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>






    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
    <div className="sm:col-span-4">
      <div className="mt-2">
        <FormInput
          labelName="Información del padre"
          values={register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del padre"
          required
        />
      </div>
    </div>
    {/*
      <div className="sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div> */}

    <div className="sm:col-span-4">
      <div className="mt-2">
        <FormInput
          labelClass="hidden"
          values={register("address", { required: true })}
          type="text"
          name="address"
          id="address"
          placeholder="Domicilio"
          required
        />
      </div>
    </div>

    <div className="col-span-4">
      <div className="mt-2">
        <FormInput
          labelClass="hidden"
          values={register("id", { required: true })}
          type="text"
          name="id"
          id="id"
          placeholder="ID"
          required
        />
      </div>
    </div>

    <div className="sm:col-span-3">
      <div className="mt-2">
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        >
          <option>soltero</option>
          <option>casado</option>
          <option>union libre</option>
        </select>
      </div>
    </div>
  </div>

function register(arg0: string, arg1: { required: boolean; }): any {
    throw new Error("Function not implemented.");
}
