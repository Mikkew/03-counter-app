import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en Desestructuracion', () => {

  test('debe de retornar un string y un numero', () => {
    const arrTest = ['ABC', 123];
    const arr = retornaArreglo();

    const [stringTest, numberTest] = arrTest;
    const [strings, numbers] = arr;

    expect([stringTest, numberTest]).toEqual([strings, numbers]);

    expect(typeof strings).toEqual(typeof stringTest);
    expect(typeof numbers).toEqual(typeof numberTest);


    expect(typeof strings).toBe( "string" );
    expect(typeof numbers).toBe( "number" );



  })
  

})