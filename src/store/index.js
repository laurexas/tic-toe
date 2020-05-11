import { combineReducers, createStore } from "redux";
import { gameReducer } from "./reducers/game.reducer";
import { saveState, loadState } from "../utils/localStorage";
import throttle from "lodash/throttle";

// create root reducer of all others. This is application state

const state = loadState();

const rootReducer = combineReducers({
  game: gameReducer,
});

// Export store (state) so we can use it in <Provider> or store.dispatch(action)
const store = createStore(rootReducer, state);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
