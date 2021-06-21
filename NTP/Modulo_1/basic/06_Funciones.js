/* 
    Funciones declarativas
*/ 
//retorno de valores
function saludar() {
    return "Hola soy Gabriel";
};
//funcion void
function saludar2() {
    console.log("Hola soy Gabriel");
};
//funciones con parametros
function saludarconp(nombre, apellido) {
    return `Hola soy ${nombre} ${apellido}`;
};
//funciones con parametros por defecto
function SaludoConProfesion(nombre="Persona", prof="Analista de Sistemas") {
    return `Hola ${nombre} mi profesion es ${prof}`;
};
//saludar
// var resultado = saludar();

// console.log(resultado);
// console.log(saludar());
//saludar2();
//console.log(saludarconp("Gabriel", "Fierro"));
//console.log(SaludoConProfesion("Gabriel", "Desarrollador de Sofware"));

/* 
    funciones expresivas - funciones anonimas
*/
var SaludoConEdad = function(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad} anios`;
};

//console.log(SaludoConEdad("Gabriel", 20));

/* 
    funciones flecha - arrow functions
*/
var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`;

var suma = (num1, num2) => num1 + num2;

//console.log(saludoConApellido("Gabriel", "Fierro"));
//console.log(suma(2, 5));

/* 
    funciones como parametros de otras funciones
*/
function saludoConFunciones(nombre, cb) {
    return cb(nombre);
};

var misaludo = saludoConFunciones("Gabriel", function (nombre) {
    return `Hola soy ${nombre}`;
});

var misaludo2 = saludoConFunciones("Gabriel", (nombre) => `Hola soy ${nombre}`);

//console.log(misaludo2);

// setTimeout(() => {
//    console.log("Hola Mundo");
// }, 2000);

// setInterval(() => {
//     console.log("Hola Mundo");
//  }, 2000);