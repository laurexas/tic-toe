import { gameReducer } from "./game.reducer";
import * as types from "../types";

describe("games reducer", () => {
  it("should return the initial state", () => {
    expect(gameReducer(undefined, {})).toEqual({
      value: null,
      XisNext: true,
      squares: Array(9).fill(null),
      logs: [],
      move: 1,
      winner: null,
    });
  });
  it("should return new state on board click", () => {
    const index = 1;
    const newState = gameReducer(undefined, {
      type: types.BOARD_CLICK,
      index,
    });

    expect(newState).toEqual({
      XisNext: false,
      logs: ["MOVE 1 : Player 1 selected X in square 2"],
      move: 2,
      squares: [null, "X", null, null, null, null, null, null, null],
      value: null,
      winner: null,
    });
  });
  it("should return initial state on new game click", () => {
    const newState = gameReducer(undefined, {
      type: types.REFRESH_GAME,
    });

    expect(newState).toEqual({
      value: null,
      XisNext: true,
      squares: Array(9).fill(null),
      logs: [],
      move: 1,
      winner: null,
    });
  });
});
