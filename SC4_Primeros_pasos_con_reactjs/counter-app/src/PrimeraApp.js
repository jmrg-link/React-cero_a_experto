import React, { Fragment } from 'react';

// Funcional Component
const PrimeraApp =  ( { saludo = 'hola mundo' } ) => {


    


    return (
        <Fragment >
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>Mi primer controlador</p>
        </Fragment>
    )
}

export default PrimeraApp