import React from "react";
import { calculateWinner } from "../../helpers";
import Cell from "./Cell";

const Board = (props) => {
  console.log(props);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
