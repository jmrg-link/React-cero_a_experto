
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from '../../data/heroes'

import "@testing-library/jest-dom";

describe('Pruebas en function de heroes', () => { 
    test('debe de retornar un heroe por id', () => { 
        const id = 2
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(p => p.id === id)
        expect(heroe).toEqual(heroeData)
        console.log(heroeData);
        //console.log(heroe);
    })

    test('debe de retornar un undefined si Heroe no existe', () => { 
        const id = 10 
        const heroe = getHeroeById(10)
        //console.log(heroe);
        expect(heroe).toBe(undefined)
     })

    test('debe de retornar un arreglo con los heroes de Dc', () => { 
        const owner  = 'DC'
        const heroes = getHeroesByOwner(owner)
        const heroesData = heroes.filter(p => p.owner === owner)
        //console.log(heroes);
        //console.log(heroesData)
        expect(heroes).toEqual(heroesData)
      })
    
    test('debe de retornar un arreglo con los heroes de Marvel', () => { 
        const owner  = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
    })  
 })