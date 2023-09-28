import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import MySvg from "../assets/doc.svg";
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 w-1/3 p-10 m-10 rounded-md sm:w-2/3 md:w-1/2 lg:w-1/3 ">
        <div className="">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(async (values) => {
            signup(values);

            // values.id = Number(values.id);
            // const res = await registerRequest(values);
            // console.log(res);
          })}
        >
          <div>
            {RegisterErrors.map((error: string, i: number) => (
              <div className="bg-red-500" key={i}>
                {error}
              </div>
            ))}

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
          Have a account?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </a>
        </p>
      </div>
      <div className="hidden md:block p-4 m-2 sm:w-1/3 md:w-1/2">
        <img src={MySvg} />
      </div>
    </div>
  );
}

export default Register;
