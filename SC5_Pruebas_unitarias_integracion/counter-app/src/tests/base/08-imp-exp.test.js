import { getHeroeById } from "../../base/08-imp-exp"
import "@testing-library/jest-dom";

describe('Pruebas en function de heroes', () => { 
    test('debe de retornar un heroe por id', () => { 
        const id = 1
        const heroe = getHeroeById(id)
        console.log(heroe);
    })
 })