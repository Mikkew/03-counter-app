import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion', () => {
  
  test('debe de retornar un string y un numero ', () => {
    
    const arr = retornaArreglo();

    expect( arr ).toEqual( ['ABC', 123] );
  });

  test('debe de retornar un string y un numero 2', () => {
    
    const [ letras, numeros ] = retornaArreglo();

    expect( letras ).toBe( 'ABC' );
    expect( numeros ).toBe( 123 );
  });
  


});
