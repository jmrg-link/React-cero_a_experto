import React, { Fragment } from "react";

// FC
const PrimeraApp = () => {
  const saludo = 'Hola Mundo'

  return (
    <>
      <h1>{ saludo }</h1>
      <pre>{/* JSON.stringify(saludo , null , 3) */}</pre>
      <p>Mi Primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;