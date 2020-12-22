import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async y await y Fetch ', () => {
  
  test('debe de retornar el url con la imagen', async () => {
    
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe('string');
  })
  
})
