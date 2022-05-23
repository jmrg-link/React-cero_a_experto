const nombre  = 'Jesus'
const apellido= 'Rico'

// const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `${ nombre } ${ apellido }`;
//console.log( nombreCompleto );


export function getSaludo(nombre='Jesus',apellido='Rico') {
    return 'Hola ' + nombre + ' ' + apellido  ;
}

//console.log( `Este es un texto: ${ getSaludo( nombre + apellido ) }  ` );