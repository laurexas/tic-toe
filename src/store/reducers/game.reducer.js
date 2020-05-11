import { BOARD_CLICK, SET_WINNER, REFRESH_GAME } from "../types";

const initialState = {
  value: null,
  XisNext: true,
  squares: Array(9).fill(null),
  logs: [],
  move: 1,
  winner: null,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_CLICK: {
      const squares = [...state.squares];
      squares[action.index] = state.XisNext ? "X" : "O";
      const message = `MOVE ${state.move} : Player ${
        state.XisNext ? "1" : "2"
      } selected ${state.XisNext ? "X" : "O"} in square ${action.index + 1}`;
      const logs = [...state.logs, message];
      return {
        ...state,
        squares,
        XisNext: !state.XisNext,
        logs,
        move: state.move + 1,
      };
    }
    case SET_WINNER: {
      return { ...state, winner: action.winner };
    }
    case REFRESH_GAME: {
      localStorage.clear();
      return initialState;
    }
    default:
      return state;
  }
};
