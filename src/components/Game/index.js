import React from "react";
import style from "./index.module.scss";
import Board from "../Board/Board";
import InformationBar from "../InformationBar/InformationBar";

const Game = () => {
  return (
    <div className={style.container}>
      <Board />
      <InformationBar />
    </div>
  );
};

export default Game;
