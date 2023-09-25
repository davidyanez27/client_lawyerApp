import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { registerRequest } from "../api/auth";
import MySvg from "../assets/doc.svg";

function Register() {
  const { register, handleSubmit } = useForm();
  const { signup } = useAuth();

  return (
    <div className="bg-slate-200 max-w-md p-10 rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(async (values) => {
          signup(values )
          // values.id = Number(values.id);
          // const res = await registerRequest(values);
          // console.log(res);
        })}
      >
        <div>
          <label
            htmlFor="id"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-1 mb-4">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
              {...register("id", { required: true })}
              placeholder="Username"
              type="number"
              name="id"
              id="id"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-1 mb-4">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
              {...register("name", { required: true })}
              placeholder="name"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-1 mb-4">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-1 mb-4">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3  sm:text-sm sm:leading-6"
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>


      <p className="mt-10 text-center text-sm text-gray-500">
            Have a account?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>

    </div>
  );
}

export default Register;
