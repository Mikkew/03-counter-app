describe('Pruebas en el archivo demo.test.jsx', () => {
  
  test('debe de ser iguales los string', () => {
      
    // 1. Inicializacion
    const mensaje1 = `Hola Mundo`;
  
    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;
  
    // Observar el comportamiento
      expect( mensaje1 ).toBe( mensaje2 );
  });

});



