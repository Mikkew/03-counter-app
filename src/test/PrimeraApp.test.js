import React from 'react'
import { render } from "@testing-library/react";
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
  })
  
  
})
