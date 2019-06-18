var dulce = {
  nombre: 'Dulce',
  apellido: 'Lifszyc',
  edad: 24,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirSiesMayorDeEdad(persona){
  console.log(`${persona.nombre} tiene ${persona.edad} años`)

  if (persona.edad >= 18) {
      console.log('por lo tanto es mayor de edad')
  } else {
    console.log('por lo tanto es menor de edad');
  }
}
imprimirSiesMayorDeEdad(dulce)
