import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

import MySvg from "../assets/register_img.svg";
import eye from "../assets/eye.svg";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center">
      {/* Login container */}
      <div className="bg-slate-100 flex rounded-2xl shadow-lg max-w-6xl p-5 items-center">
        {/* form */}
        <div className="sm:w-1/2 px-16">
          <h2 className="mt-2 mb-10 font-bold text-2xl text-black text-center">
            Register
          </h2>

          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleSubmit(async (values) => {
              signup(values);

            })}
          >
            {registerErrors.map((error: string, i: number) => (
              <div className="text-red-500 text-center whitespace-normal w-[200px]" key={i}>
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
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>

        </div>

        {/* image */}
        <div className="sm:flex sm:rounded-2xl sm:items-center sm:justify-center hidden bg-slate-200 w-1/2 p-5">
          <img className="w-5/6" src={MySvg} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Register;
