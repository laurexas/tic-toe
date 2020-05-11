import React from "react";
import Squares from "./squares";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Board from "../Board/Board";
import store from "../../store";
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <Squares />
    </Provider>
  );
});

it("calls onClick event on click of a board square", () => {
  const onClick = jest.fn();
  let wrapper = mount(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  console.log(wrapper);
  // wrapper.find('button.square').first().simulate('click');
  // expect(onClick).toBeCalledWith(0)
});
