import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  
  test('getHeroeByIdAsync debe de retornar un heroe async ', ( done ) => {
    
    const id = 1;

    getHeroeByIdAsync(id)
      .then( heroe => {
        
        const heroesData = heroes.find( h=> h.id === id );
        expect(heroe).toBe( heroesData );
        
        done();

      })
  });

  test('debe obtener un error si el id no existe ', ( done ) => {
    
    const id = 10;

    getHeroeByIdAsync(id)
      .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      })
  });
  
})
