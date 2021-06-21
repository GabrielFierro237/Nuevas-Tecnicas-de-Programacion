// //while

// while (condition) {
    
// }

// //for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//for in

var persona = {
    nombre: "Gabriel",
    apellido: "Fierro",
    viajes: ["as","asd"]
};

for (const key in persona) {
    console.log(persona[key]);
}


//forof
var iterable = [1,2,3,4,5];
var iterable2 = "Gabriel";
for (const valor of iterable2) {
    console.log(valor);
}
