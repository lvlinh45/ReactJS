import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// using react hook form

const schemaValidation = Yup.object({
  firstName: Yup.string().required().max(10),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  console.log("TCL: SignUpFormHook -> errors", errors);
  // errors = formState.errors;
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          //   // pattern regex
          // })}
          {...register("firstName")}
        />
        {errors.firstName?.type === "required" && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
        {errors.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your Email address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        />
      </div>

      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpFormHook;
