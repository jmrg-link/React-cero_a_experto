import { getImagen } from '../../base/11-async-await'

describe('Pruebas con async-await y fetch', () => { 
    test('debe de retornar la url de la imagen', async () => { 
        const url = await getImagen()
        //console.log(`Es tipo: ${typeof url}, devuelve: ${url}`);
        expect(typeof url).toBe('string')
     })

    test('debe de retornar un error en la devolucion url https', async () => { 
        const url = await getImagen()
        //console.log(`Es tipo: ${typeof url}, devuelve: ${url}`);
        expect(url.includes('https://')).toBe(true)
     })
 })

