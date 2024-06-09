import React from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center flex-row bg-gray-200 ">
      <div className="rounded-2xl border w-9/12 h-3/12 flex flex-row mt-16  mb-16 bg-white">
        <div className="w-6/12 rounded-2xl ">
          <img
            src="src/assets/image.jpg"
            alt="image"
            srcset=""
            className="rounded-2xl"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mr-8 ml-8 w-1/2 justify-center">
          <h1 className="font-bold text-3xl tracking-widest text-center mb-8">Signup Form</h1>

          <label className="tracking-wider mb-4 font-semibold">First Name</label>
          <input
            {...register("firstname", { required: true })}
            className="border rounded h-10 bg-gray-100 mb-4 pl-2"
          />
          {errors.firstname && (
            <span className="mt-1">This field is required</span>
          )}

          <label className="tracking-wider mb-4 font-semibold">Last Name</label>
          <input
            {...register("lastname", { required: true })}
            className="border rounded h-10 bg-gray-100 mb-4 pl-2"
          />
          {errors.lastname && (
            <span className="mt-1">This field is required</span>
          )}

          <label className="tracking-wider mb-4 font-semibold">Email Address</label>
          <input
            type="email"
            {...register(
              "emailaddress",
              { required: true },
              { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }
            )}
            className="border rounded mb-4 h-10 bg-gray-100 pl-2"
          />

          {errors.emailaddress && (
            <span className="mt-1">This field is required</span>
          )}
          <p className="mb-4 tracking-wider">If already have an account? <a href="http://">Log in</a></p>
         
          <button type="submit" className="font-semibold tracking-wide border rounded transition delay-100 ease-in-out bg-red-400 hover:bg-red-500 hover:tracking-widest pt-4 pb-4">SIGN UP</button>

        </form>
      </div>
    </div>
  );
}

export default App;
