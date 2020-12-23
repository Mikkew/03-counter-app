import React from 'react';
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en mi <PrimeraApp />', () => {
  
  // test('debe de mostrar Hola soy Jose', () => {
    
  //   const saludo = "Hola, Soy Jose";
  //   const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
  //   expect( getByText( saludo ) ).toBeInTheDocument();
  // })

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    
    const saludo = "Hola, Soy Jose";
    const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

    expect(  wrapper ).toMatchSnapshot();

  })
  
  test('debe de mostrar el subtitulo enviador por props', () => {
    
    const saludo = "Hola, Soy Jose";
    const subtitulo = "El merengues";
    const wrapper = shallow( <PrimeraApp saludo={ saludo } subtitulo={ subtitulo } /> );

    const textoParrafo = wrapper.find('p').text()
    console.log(textoParrafo);

    expect( textoParrafo ).toBe( subtitulo );
  })
  

})

