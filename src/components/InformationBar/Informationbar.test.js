import React from "react";
import InformationBar from "./InformationBar";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <InformationBar />
    </Provider>
  );
});
