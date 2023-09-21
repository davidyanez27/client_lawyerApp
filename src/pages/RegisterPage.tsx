import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function Register() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form
        onSubmit={handleSubmit(async (values) => {
          console.log(values);
          const res = await registerRequest(JSON.stringify(values));
        })}
      >
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="name"
          name="name"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="username"
          name="username"
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
}

export default Register;
