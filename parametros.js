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

function imprimirNombreEnMayusculas(persona){
// var nombre = persona.nombre
  var { nombre } = persona
console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(dulce)
imprimirNombreEnMayusculas(dario)

function cumpleanos(persona){
  return {
    ... persona,
    edad: persona.edad + 1
  }
}
