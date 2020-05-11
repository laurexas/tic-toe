import React from "react";
import style from "./index.module.scss";
import Squares from "../Squares/Squares";

const Board = () => {
  return (
    <div className={style.board}>
      <Squares />
    </div>
  );
};

export default Board;
