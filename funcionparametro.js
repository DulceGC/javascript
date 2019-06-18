class persona{
  constructor(nombre, apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
 }

saludar(fn){
  var { nombre, apellido } = this
  console.log(`Hola, me llamo ${nombre} ${apellido} `);
  if(fn){
    fn(nombre,apellido)

  }
}


soyAlto(){
return this.altura > 1.8
 }
}

class desarrollador extends persona {
  constructor (nombre, apellido,altura) {
  super(nombre, apellido, altura)
  }

  saludar(fn){
    var { nombre, apellido } = this
    // var nombre = nombre
    // var apellido = apellido
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}
function responderSaludo(nombre, apellido,esDev){
  console.log(` Buen dia ${nombre} ${apellido}` );
  if (esDev){
    console.log(` Ah mira, no sabia que eras desarrollador/a` );
  }
}

var dulce = new persona('Duce','González', 1.45)
var erika = new persona('Erika','Luna', 1.82)
var arturo = new desarrollador('Arturo','Martínez', 1.90)

dulce.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
