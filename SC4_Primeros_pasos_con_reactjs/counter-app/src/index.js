import React from 'react'
import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';

import './index.css'

const divRoot = document.querySelector('#root')
const root = createRoot(divRoot)
root.render(<PrimeraApp saludo='Hola Mundo'/>)
