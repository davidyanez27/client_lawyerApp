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


<form>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Company Name*
          </label>
          <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Tutsplus"/>
          <div>
            <span className="text-red-500 text-xs italic">
              Please fill out this field.
            </span>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Title*
          </label>
          <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Engineer"/>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Application Link*
          </label>
          <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...."/>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Location*
          </label>
          <div>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
              <option>Abuja</option>
              <option>Enugu</option>
              <option>Lagos</option>
            </select>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Job Type*
          </label>
          <div>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
            </select>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Department*
          </label>
          <div>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
              <option>Engineering</option>
              <option>Design</option>
              <option>Customer Support</option>
            </select>
          </div>
        </div>
      </div>
      <div className="-mx-3 md:flex mt-2">
        <div className="md:w-full px-3">
          <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
            Button
          </button>
        </div>
      </div>
    </div>
  </form>

 
    


    // <>

    //   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //       <img
    //         className="mx-auto h-10 w-auto"
    //         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //         alt="Your Company"
    //       />
    //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Sign in to your account
    //       </h2>
    //     </div>

    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //       <form className="space-y-6" action="#" method="POST">
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //             Email address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <div className="flex items-center justify-between">
    //             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    //               Password
    //             </label>
    //             <div className="text-sm">
    //               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //                 Forgot password?
    //               </a>
    //             </div>
    //           </div>
    //           <div className="mt-2">
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               autoComplete="current-password"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>




    //         <div>
    //           <button
    //             type="submit"
    //             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Sign in
    //           </button>
    //         </div>
    //       </form>

    //       <p className="mt-10 text-center text-sm text-gray-500">
    //         Not a member?{' '}
    //         <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
    //           Start a 14 day free trial
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </>
  )
}