import React from "react";
import { shallow } from "enzyme";

import Button from "../src/components/button";

describe("<Button />", () => {
  it("should be large", () => {
    const wrapper = shallow(<Button large>Button</Button>);

    expect(wrapper.find("button").prop("className")).toBe("button_large");
  });
});
