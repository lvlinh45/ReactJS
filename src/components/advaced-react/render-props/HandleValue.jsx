import React, { useState } from "react";

// lifting state
const HandleValue = () => {
  return (
    <Input>{(value) => <DisplayValue value={value}></DisplayValue>}</Input>
  );
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="p-3 border border-gray-500 w-full max-w-[500px] rounded-md"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {typeof props.children === "function" ? props.children(value) : null}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="text-3xl font-bold text-blue-500">{value}</span>;
};

export default HandleValue;
