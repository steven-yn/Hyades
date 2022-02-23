// enzyme 와 @testing-library 는 같이 실행하면 에러가 납니다. 항상 주석 처리 잊지마세요 !
// 가끔 충돌 지점이 없어 실행될때도 있으나,,,,, 권장드리지 않습니다

import React from "react";
import YoonOceanProfile from "../YoonOceanProfile";
/*

// enzyme 적용시

import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="yoonOcean" name="윤성연" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders username and name", () => {
    const wrapper = mount(<Profile username="yoonOcean" name="윤성연" />);
    expect(wrapper.props().username).toBe("yoonOcean");
    expect(wrapper.props().name).toBe("윤성연");
  });
});

*/

// @testing-library 적용시

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);
describe("<YoonOceanProfile />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <YoonOceanProfile username="yoonOcean" name="윤성연" />
    );
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(
      <YoonOceanProfile username="yoonOcean" name="윤성연" />
    );
    utils.getByText("yoonOcean"); //yoonOcean 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(윤성연)"); // (윤성연) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/윤/); // 정규식 /윤/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
