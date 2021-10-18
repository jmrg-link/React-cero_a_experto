import React, { Fragment } from "react";
import PropTypes from 'prop-types'

// FC
const PrimeraApp = ( { saludo , subtitulo} ) => {

  
  return (
    <>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
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
