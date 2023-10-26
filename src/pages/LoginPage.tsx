import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

import eye from "../assets/eye.svg";
import MySvg from "../assets/login_img.svg";
import FormInput from "../components/FormInput";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
      console.log(values);
      signin(values);
    });

  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
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
            Login
          </h2>

          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={onSubmit}
          >
            {signinErrors.map((error: string, i: number) => (
              <div
                className="text-red-500 text-center whitespace-normal w-[200px]"
                key={i}
              >
                {error}
              </div>
            ))}
            <FormInput
              values={register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />

            <div className="relative">
              <FormInput
                values={register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
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
            Forgot you password?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Reset
            </a>
          </p>

          <p className="mt-2 text-center text-sm text-gray-500">
            You do not have an account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>

        {/* image */}
        <div className="sm:flex sm:items-center sm:justify-center hidden bg-slate-200 w-1/2 p-5 rounded-2xl">
          <img className="w-5/6 object-cover" src={MySvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
