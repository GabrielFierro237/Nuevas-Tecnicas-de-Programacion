//como se hacia antes

function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}

Rectangulo.prototype.calculoArea = function () {
  return this.base * this.altura;
};

var rectangulo = new Rectangulo(6, 3);

//console.log(rectangulo.calculoArea());
//console.log(rectangulo.base);

//declaracion de clases
class Rectangulo2 {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calculoArea() {
    return this.base * this.altura;
  }
}

var rectangulo2 = new Rectangulo2(6, 4);
//console.log(rectangulo2.calculoArea());

//clase persona
// implementar getter, setter y realizzar una implementacion
//implementar metodos estaticos - clase punto, function distancia
//construir clase persona y estudiante, extendends estudiante con personas

/*
    DEBER
*/
/*
    Get y set
*/
let persona = {
  nombre: "Alejandro",
  apellido: "Mora",
  get nombreCompleto() {
    return `${nombre} ${apellido}`;
  },
  set nombreCompleto(nom) {
    const palabras = nom.split(" ");
    this.nombre = palabras[0] || "";
    this.apellido = palabras[1] || "";
  },
};

persona.nombreCompleto = "Gabriel Fierro";

console.log(persona.nombre);
console.log(persona.apellido);

/*
    metodos estaticos
*/
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(40, 89);
const p2 = new Punto(59, 14);

console.log(Punto.distancia(p1, p2));

/*
Construir Clase Persona y estudiante, extender Estudiante con Persona
*/
class Persona {
  constructor(person) {
    this.nombreper = person;
  }
  presentacion() {
    return "Me llamo " + this.nombreper + " Soy una Persona comun";
  }
}

class Estudiante extends Persona {
  constructor(person, estud) {
    super(person);
    this.nombreest = estud;
  }
  show() {
    return (
      this.presentacion() +
      ", yo me llamo " +
      this.nombreest +
      " Soy un estudiante comun"
    );
  }
}

estper = new Estudiante("Gabriels", "Alejandro");
console.log(estper.show());
