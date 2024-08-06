import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  /*   const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSelectChange = (event) => {
    setCountry(event.target.value);
  }; */

  /*  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  // console.log("🚀 ~ Form ~ values:", values);

  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  }; */
  // obj[value]

  const { value, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (value.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  // console.log("🚀 ~ Form ~ value:", value);
  // Formik + yup vs React hook form
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" id="" onChange={handleChange} /> */}
        <button type="submit" className="p-3 rounded-lg bg-blue-500 text-white">
          Submit
        </button>
      </form>
      {/*  <textarea
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
      <select name="country" onChange={handleSelectChange}>
        <option value="VietName">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
