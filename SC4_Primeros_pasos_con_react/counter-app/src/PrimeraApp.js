import React, { Fragment } from "react";
import PropTypes from 'prop-types'

// FC
const PrimeraApp = ( { saludo , subtitulo} ) => {

  
  return (
    <>
      <h1>{ saludo }</h1>
<<<<<<< HEAD
      <p>{ subtitulo }</p>
=======
     
      <p>Mi Primera aplicacion</p>
>>>>>>> 6f7e6dadcb56cc7ac234567f119b9ee829814af3
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  
}
PrimeraApp.defaultProps = {
  subtitulo:'Soy un parrado'
}

export default PrimeraApp;
