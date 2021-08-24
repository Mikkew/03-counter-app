import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () => {
  
  test('debe de retornar un onjecto', () => {
    
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    
    const user = getUser();

    expect( user ).toEqual( userTest );

  });

  test('getUsuarioActivo debe de retornar un objecto', () => {
    
    const nombre = 'Juan';
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: 'ABC567',
      username: nombre
    });

  });
  
  

});
