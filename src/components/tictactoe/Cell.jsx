import React from "react";

const Cell = ({ value, onClick, className }) => {
  // const { value, onClick } = props;
  // // object destructuring
  // const student = {
  //   name: "linh",
  //   age: 26,
  // };

  // const { name, age } = student;

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
