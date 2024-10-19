import React from "react";
import { useCount } from "./count-context";
import useCounter from "../state-reducer/useCounter";

const Decrement = ({ onClick, ...props }) => {
  const { handleDecrement } = useCounter();

  return (
    <button
      className="flex items-center justify-center p-5 text-lg cursor-pointer decrement bg-slate-200"
      onClick={onClick}
      {...props}
    >
      -
    </button>
  );
};

export default Decrement;
