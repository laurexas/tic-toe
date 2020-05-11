import * as actions from "./game.action";
import * as types from "../types";

describe("actions", () => {
  it("should create an action to handle board click", () => {
    const index = 0;
    const expectedAction = {
      type: types.BOARD_CLICK,
      index,
    };
    expect(actions.handleBoardClick(index)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to pick a winnner", () => {
    const winner = "X";
    const expectedAction = {
      type: types.SET_WINNER,
      winner,
    };
    expect(actions.setWinner(winner)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to start new game", () => {
    const expectedAction = {
      type: types.SET_WINNER,
    };
    expect(actions.setWinner()).toEqual(expectedAction);
  });
});
