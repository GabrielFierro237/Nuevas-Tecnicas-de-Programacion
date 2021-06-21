//console.log("Hola Mundo"); 
//Consultar las funciones de console.*


//----DEBER----

//Limpia la consola
console.clear();
// console.info Se utiliza para mensajes de información
console.info("Hola Mundo");
//console.time inicia un temporizador
console.time("answer time");
//console.timeEnd finiliza el temporizador
console.timeEnd("answer time");
//console.warn("Hola Mundo");
//console.error("Hola Mundo");
//Console GROUP
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");