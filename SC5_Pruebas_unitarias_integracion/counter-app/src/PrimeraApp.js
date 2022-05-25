import React, { Fragment } from 'react';
import { PropTypes } from "prop-types";

// Funcional Component
const PrimeraApp =  ( { 
    saludo,
    subtitle
} ) => {


    return (
        <Fragment >
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>{subtitle}</p>
        </Fragment>
    )
}

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo: 'Hola a todos',
    subtitle:'hola subtitulo'
}

export default PrimeraApp