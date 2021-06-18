//Asignacion
// =

//comparacion
// ==
// ===
/*
    console.log(2 == 2);
    console.log(2 === '2');
    console.log(2 == '2');
*/
// !=
//console.log(2 != 3);

/* 
    <
    >
    <=
    >=
*/

//operadoes de asigancion compuestos
/* 
    =+ / x = x + y
*/
/*
    var numero = 3;
    numero += 2;
    console.log(numero);
*/

//Operadores aritemticos
/*
    +
    -
    *
    /
    %
    **
*/

//descestructura objetos
var persona = {
    nombre: "Gabriel", 
    apellido: "Fierro", 
    edad: 20, 
    viajes: {
        destino1: "Colombia", 
        destino2: "Egipto"
    }
};

var { nombre:nombre2, apellido, viajes: { destino1 } } = persona;

console.log(persona);
console.log(nombre2, apellido, destino1);
console.log(apellido);

