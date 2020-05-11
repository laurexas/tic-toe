import { BOARD_CLICK, SET_WINNER, REFRESH_GAME } from "../types";

export const handleBoardClick = (index) => {
  return {
    type: BOARD_CLICK,
    index,
  };
};

export const setWinner = (winner) => {
  return {
    type: SET_WINNER,
    winner,
  };
};

export const refreshGame = () => {
  return {
    type: REFRESH_GAME,
  };
};
