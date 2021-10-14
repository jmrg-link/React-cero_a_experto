import React, { Fragment } from "react";

// FC
const PrimeraApp = ( props ) => {
  const saludo = 'Hola Mundo'
  console.log(props);

  return (
    <>
      <h1>{ saludo }</h1>
      <pre>{/* JSON.stringify(saludo , null , 3) */}</pre>
      <p>Mi Primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;
