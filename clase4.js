var dulce = {
nombre:'Dulce',
apellido: 'González',
edad: 23
}
var dario = {
nombre:'Dario',
apellido: 'Susnisky',
edad: 27
}

function imprimirNombreYEdad(persona){
// var nombre = persona.nombre
  var { nombre, apellido, edad } = persona
console.log('Hola, me llamo' + ' ' + nombre + ' ' + apellido + 'y tengo' + ' ' + edad + ' ' +'años')
}

//imprimirNombreEnMayusculas(dulce)
//imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({ apellido: 'Gomez'})
imprimirNombreYEdad(dulce)
imprimirNombreYEdad(dario)
