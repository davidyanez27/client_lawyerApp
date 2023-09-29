import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import MySvg from "../assets/file_img.svg";
import eye from "../assets/eye.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center">
      {/* Login container */}
      <div className="bg-slate-100 flex rounded-2xl shadow-lg max-w-6xl p-5">
        {/* form */}
        <div className="sm:w-1/2 px-16">
          <h2 className="mt-2 mb-10 font-bold text-2xl text-black text-center">
            Register
          </h2>
          {/* <p className="text-sm mt-4 mb-8 text-black">
            Welcome to our registration page!
          </p> */}

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(async (values) => {
              signup(values);

              // values.id = Number(values.id);
              // const res = await registerRequest(values);
              // console.log(res);
            })}
          >
            {RegisterErrors.map((error: string, i: number) => (
              <div className="text-red-500 text-center" key={i}>
                {error}
              </div>
            ))}

            <input
              className="p-2 mt-2 rounded-xl border text-black"
              {...register("id", { required: true })}
              placeholder="Username"
              type="number"
              name="id"
              id="id"
              min={0}
              required
            />
            <input
              className="p-2 mt-2 rounded-xl border text-black"
              {...register("name", { required: true })}
              placeholder="name"
              type="text"
              name="name"
              id="name"
              required
            />
            <input
              className="p-2 mt-2 rounded-xl border text-black"
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
            />
            <div className="relative">
              <input
                className="p-2 mt-2 mb-8 rounded-xl border text-black w-full"
                {...register("password", { required: true })}
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                required
              />
              <img
                className="w-6 h-7 absolute top-9 right-3 -translate-y-5"
                src={eye}
                alt=""
              ></img>
            </div>

            <button
              type="submit"
              className="flex w-3/4 mx-auto justify-center rounded-xl bg-gray-600 py-2 hover:scale-110 duration-300"
            >
              Register
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have a account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>

          {/* <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500"/>
          </div> */}
        </div>

        {/* image */}
        <div className="sm:flex sm: rounded-2xl sm:items-center hidden bg-slate-200 w-1/2 p-5">
          <img src={MySvg} alt=""></img>
        </div>
      </div>
    </div>

    // <div className="min-h-screen flex items-center justify-center">
    //   <div className="bg-slate-200 w-1/3 p-10 m-10 rounded-md sm:w-2/3 md:w-1/2 lg:w-1/3 ">
    //     <div className="">
    //       <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Register
    //       </h2>
    //     </div>

    //     <form
    //       onSubmit={handleSubmit(async (values) => {
    //         signup(values);

    //         // values.id = Number(values.id);
    //         // const res = await registerRequest(values);
    //         // console.log(res);
    //       })}
    //     >
    //       <div>
    //         {RegisterErrors.map((error: string, i: number) => (
    //           <div className="bg-red-500" key={i}>
    //             {error}
    //           </div>
    //         ))}

    //         <label
    //           htmlFor="id"
    //           className="block text-sm font-medium leading-6 text-gray-900"
    //         >
    //           Username
    //         </label>
    //         <div className="mt-1 mb-4">
    //           <input
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
    //             {...register("id", { required: true })}
    //             placeholder="Username"
    //             type="number"
    //             name="id"
    //             id="id"
    //             required
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="name"
    //           className="block text-sm font-medium leading-6 text-gray-900"
    //         >
    //           Name
    //         </label>
    //         <div className="mt-1 mb-4">
    //           <input
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
    //             {...register("name", { required: true })}
    //             placeholder="name"
    //             type="text"
    //             name="name"
    //             id="name"
    //             required
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium leading-6 text-gray-900"
    //         >
    //           Email address
    //         </label>
    //         <div className="mt-1 mb-4">
    //           <input
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
    //             {...register("email", { required: true })}
    //             placeholder="Email"
    //             type="email"
    //             name="email"
    //             id="email"
    //             required
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="password"
    //           className="block text-sm font-medium leading-6 text-gray-900"
    //         >
    //           Password
    //         </label>
    //         <div className="mt-1 mb-4">
    //           <input
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
    //             {...register("password", { required: true })}
    //             placeholder="Password"
    //             type="password"
    //             name="password"
    //             id="password"
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <button
    //           type="submit"
    //           className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           Register
    //         </button>
    //       </div>
    //     </form>

    //     <p className="mt-10 text-center text-sm text-gray-500">
    //       Have a account?{" "}
    //       <a
    //         href="/login"
    //         className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    //       >
    //         Sign in
    //       </a>
    //     </p>
    //   </div>
    //   <div className="hidden md:block p-4 m-2 sm:w-1/3 md:w-1/2">
    //     <img src={MySvg} />
    //   </div>
    // </div>
  );
}

export default Register;
