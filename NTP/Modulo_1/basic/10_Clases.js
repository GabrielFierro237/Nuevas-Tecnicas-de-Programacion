//como se hacia antes

function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;
};

Rectangulo.prototype.calculoArea = function() {
    return this.base * this.altura;
};

var rectangulo = new Rectangulo(6, 3);

console.log(rectangulo.calculoArea());
console.log(rectangulo.base);

//declaracion de clases
class Rectangulo2{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calculoArea(){
        return this.base * this.altura;
    }
};

var rectangulo2 = new Rectangulo2(6, 4);
console.log(rectangulo2.calculoArea());


//clase persona
// implementar getter, setter y realizzar una implementacion
//implementar metodos estaticos - clase punto, function distancia
//construir clase persona y estudiante, extendends estudiante con personas

/*
    DEBER
*/