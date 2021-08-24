import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas para <CounterApp />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterText = Number(wrapper.find("h2").text().trim());

    expect(counterText).toBe(value);
  });


  test("debe de incrementar con el botón +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = Number(wrapper.find("h2").text().trim());
    expect(counterText).toBe(11);
  });


  test("debe de incrementar con el botón -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = Number(wrapper.find("h2").text().trim());
    expect(counterText).toBe(9);
  });


  test('debe de colocar el valor por defecto con el boton de reset', () => {
    
    const value = 104
    const wrapper = shallow(<CounterApp value={ value }/>);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = Number(wrapper.find("h2").text().trim());
    expect(counterText).toBe(value);
  });
  
  
});
