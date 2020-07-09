//React tst renderer
//Allow us to render our componentsinside of just regular javascript code

import React from "react";
import { shallow } from "enzyme";

import Header from "../../components/Header";

test("should render header correctyly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
