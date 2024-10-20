import React, { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Count from "./Count";
import { CountProvider } from "./count-context";

// eslint-disable-next-line react/prop-types
const Counter = ({
  count = 0,
  handleIncrement = () => {},
  handleDecrement = () => {},
}) => {
  return (
    <CountProvider value={{ count }}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement onClick={handleDecrement}></Decrement>
        <Count></Count>
        <Increment onClick={handleIncrement}></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
