import React from "react";
import Game from "./index";
import { shallow } from "enzyme";
it("renders without crashing", () => {
  shallow(<Game />);
});
