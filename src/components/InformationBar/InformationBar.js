import React from "react";
import style from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { refreshGame } from "../../store/actions/game.action";

const InformationBar = () => {
  const { logs, winner } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const renderLogs = () => {
    return logs.map((log, i) => <span key={i}>{log}</span>);
  };
  return (
    <div className={style.information}>
      {renderLogs()}
      <span>{winner ? `WINNER : ${winner}` : null}</span>
      <button onClick={() => dispatch(refreshGame())}>Start from start</button>
    </div>
  );
};

export default InformationBar;
