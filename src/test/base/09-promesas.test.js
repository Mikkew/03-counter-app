import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  
  test('getHeroeByIdAsync debe de retornar un Heroe async', (done) => {
    
    const id = 1;

    getHeroeByIdAsync(id)
      .then( h => {

        expect( h ).toBe( heroes.find(h => h.id === id) );
        done();

      });
  });


  test('debe de obtener un error si el héroe por id no existe', (done) => {
    
    const id = 10;

    getHeroeByIdAsync(id)
      .catch( error => {

        expect( error ).toBe( 'No se pudo encontrar el héroe' );
        done();

      });
      
  });
  
  

});
