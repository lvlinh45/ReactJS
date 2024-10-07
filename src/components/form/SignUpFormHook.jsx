import React, { useEffect } from "react";
import { Controller, useController, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
// using react hook form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be ten 10 character or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log("TCL: SignUpFormHook -> ", dirtyFields); // 1 mảng gồm trường nào giá trị đã thay đổi
  console.log("TCL: SignUpFormHooaak -> ", isDirty); // 1 trong giá trị các trường thay đổi thì true

  const watchShowAge = watch("showAge", false);
  // console.log("TCL: SignUpFormHook -> isValid", isValid);
  // console.log("TCL: SignUpFormHook -> isSubmitting", isSubmitting);
  // errors = formState.errors;
  const onSubmit = async (values) => {
    if (isValid) {
      // after successfully submitted
      // then reset form
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    /* const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    return response.data; */
    /*  return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 5000);
    }); */
  };

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const handleSetDemoData = () => {
    setValue("firstName", "evondev");
    setValue("lastName", "FE");
    setValue("email", "evondev@gmail.com");
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
        {errors.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
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
        <MyInput
          name="email"
          placeholder="Enter your Email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="text"
          id="email"
          placeholder="Enter your Email address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter the number" />
        )}
      </div>

      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        {isSubmitting ? (
          <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>

      <div>
        <button
          className="p-3 bg-green-300 text-white"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

/* const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      defaultValue=""
      control={control}
      render={({ field }) => (
        <input
          className="p-4 rounded-md border border-gray-100"
          {...field}
          {...props}
        />
      )}
    ></Controller>
  );
}; */
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
