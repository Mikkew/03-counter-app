import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Las pruebas en el archivo 05-funciones', ()=> {
  test('getUser debe de retornar un objeto ', () => {
    
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(userTest);


  })

  test('getUsuarioActivo debe de retornar un objecto activo', () => {
    const userTest = {
      uid: 'ABC567',
      username: "Mario"
    }

    const user = getUsuarioActivo("Mario");

    expect(user).toEqual(userTest)

  })
  
  
})