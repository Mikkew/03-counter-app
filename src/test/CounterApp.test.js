import React from 'react'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import "@testing-library/jest-dom";

describe('Pruebas en el <CounterApp />', () => {

  let wrapper = shallow( <CounterApp />);


  beforeEach( () => {
    wrapper = shallow( <CounterApp />);
  })

  test('debe de mostrar <CounterApp /> correctamente', () => {
    
    const valor = 1;
    const wrapper = shallow( <CounterApp value={valor} />);

    expect( wrapper ).toMatchSnapshot();
  })
  
  test('debe de mostrar el valor por defecto de 100', () => {

    const valor = 100;
    const wrapper = shallow( <CounterApp value={valor} />);

    const valorDefecto = wrapper.find('h2').text().trim();
    console.log( valorDefecto );

    expect( parseInt(valorDefecto) ).toBe(100)
  })

  test('debe de incrementar con el boton de +1', () => {
    
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('11');
    console.log(counterText);

  })
  
  test('debe de incrementar con el boton de -1', () => {
    
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('9');
    console.log(counterText);

  })
  
  test('debe de colocar un valor por defecto en btn reset', () => {

    const wrapper = shallow( <CounterApp value={ 105 } />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();    
    expect(counterText).toBe('105');
    console.log( counterText );
  })

})
