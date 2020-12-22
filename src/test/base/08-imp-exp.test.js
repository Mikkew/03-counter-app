import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
  
  test('debe de retornar un heroe por id', () => {
    
    const id = 1;
    const heroe = getHeroeById(id);

    const heroesData = heroes.find( h=> h.id === id );

    expect(heroe).toEqual(heroesData);
  })

  test('debe de retornar undefined si heroe no existe', () => {
    
    const id = 11;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual(undefined);
  })

  test('debe de retornar los heroes de DC', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter( h => h.owner === owner );
    console.log(heroesData);

    expect(heroes).toEqual(heroesData);
  })

  test('debe de retornar los heroes de Marvel', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter( h => h.owner === owner );
    console.log(heroesData);

    expect(heroes).toEqual(heroesData);
  })

  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    console.log(heroes);

    expect(heroes.length).toBe(2);
  })
  
})