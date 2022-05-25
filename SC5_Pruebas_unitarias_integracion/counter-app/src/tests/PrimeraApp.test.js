import React from 'react';
import { render  } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en PrimeraApp', () => { 
    test('debe de mostrar el mensaje de title', () => { 
            const saludo = 'Hola a todos'
            const { getByText } = render( <PrimeraApp /> )
            // eslint-disable-next-line testing-library/prefer-screen-queries
            expect( getByText(saludo)).toBeInTheDocument()
     })
 })