import React, { useState } from "react";

const Form2 = () => {
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

  const [values, setValues] = useState({
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
  };
  // obj[value]
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="hobby"
          id=""
          onChange={handleInputChange}
        />
      </div>
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

export default Form2;
