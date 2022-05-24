import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'


describe('Pruebas con Promesas', () => { 
    test('debe de retornar un heroe async en 1 segundo', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toBe(heroes[0])
                done()
            })
    })

    test('debe de obtener un error si el heroe por id no existe', (done) => { 
        const id = 10
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toBe(heroes[0])
                done()
            })
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe!!')
                done()
            })
     })
 })