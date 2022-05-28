//import { render  } from '@testing-library/react'
import React from 'react';
import PrimeraApp from '../PrimeraApp'
import { shallow } from 'enzyme'
import { createSerializer } from 'enzyme-to-json'
import '@testing-library/jest-dom'

describe('Pruebas en PrimeraApp', () => { 
    test('debe de mostrar <PrimeraApp /> saludo correctamente', () => { 
        const saludo = 'Hola a todos'
        const wrapper = shallow(<PrimeraApp/>)
        expect(wrapper).toMatchSnapshot()
     })

    test('debe de mostrar <PrimeraApp /> subtitle correctamente', () => { 
        const subtitle = 'hola subtitulo'
        const saludo = 'Hola a todos'
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitle={subtitle}
                />)
        const textP = wrapper.find('p').text()
        console.log(textP);
        expect( textP ).toBe(subtitle)
        
     })
    
    //test('debe de mostrar el mensaje de title', () => { 
    //        const saludo = 'Hola a todos'
    //        const { getByText } = render( <PrimeraApp /> )
    //        // eslint-disable-next-line testing-library/prefer-screen-queries
    //        expect( getByText(saludo)).toBeInTheDocument()
    // })

 })