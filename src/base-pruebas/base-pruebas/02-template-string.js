

const nombre   = 'Dhanibel';
const apellido = 'Reyes';

const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre) }  ` );