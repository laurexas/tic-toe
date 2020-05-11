import React from "react";
import style from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { handleBoardClick, setWinner } from "../../store/actions/game.action";
import calculateWinner from "../../utils/checkIfWinner";

const Squares = () => {
  const { squares } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      const winner = calculateWinner(squares);
      dispatch(setWinner(winner));
      return;
    }
    dispatch(handleBoardClick(i));
  };
  if (calculateWinner(squares)) {
  }
  return squares.map((s, i) => (
    <button key={i} className={style.square} onClick={() => handleClick(i)}>
      {s}
    </button>
  ));
};

export default Squares;
