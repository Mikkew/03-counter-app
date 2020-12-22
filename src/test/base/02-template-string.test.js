import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {
  test('Debe de retornar un saludo', () => {
    const nombre = "Juan";

    const saludo = getSaludo(nombre);
    expect( saludo ).toBe( "Hola " + nombre + "!");

    console.log(saludo);

  })
  
  test('getSaludo debe de retornar Hola Carlos, si no hay argumentos ', () => {
    
    const saludo = getSaludo()
    expect( saludo ).toBe("Hola Carlos!")

    console.log( saludo );
  })
  
})