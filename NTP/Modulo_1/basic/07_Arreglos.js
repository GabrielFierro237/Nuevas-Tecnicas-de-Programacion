/*
    concat
*/
var numeros = [1, 2, 3, 4, 5];
var nuevosnumeros= numeros.concat([6, 7, 8, 9, 0]);

// console.log(numeros);
// console.log(nuevosnumeros);

/* 
    join
*/
var nombre = ["g", "a", "b", "r", "i", "e", "l"];

//console.log(nombre.join(","));
//console.log(numeros.join("-"));
/*
    slice
*/
//console.log(nombre.slice(2));

/* 
    index of
*/
//console.log(nombre.indexOf("i"));
/*
    last index of
*/
//console.log(nombre.lastIndexOf("l"));

/*
    reverse
*/
//console.log(nombre.reverse());

/*
    sort
*/
var numerosdesordenados = [1,5,8,6,4,1,2,5,5,9];
//console.log(numerosdesordenados.sort());

/*
    shift
*/
//console.log(numerosdesordenados.shift());

/*
    pop
*/
//console.log(numerosdesordenados.pop());

/*
    push
*/
numerosdesordenados.push(1012);
//console.log(numerosdesordenados);

var pares = [2,4,6,8,10];
//console.log(pares.map((elemento) => elemento - 1));

//consultar funciones de arreglo
console.clear();
//----DEBER----
//foreach: ejecuta la función indicada una vez por cada elemento del array.
const arr = [1,2,3,4,5];
arr.forEach(item => {
    console.log(item);
});
//includes: determina si un array incluye un determinado elemento, devuelve true o false
const arr2 = [1,2,3];
console.log(arr2.includes(2));
console.log(arr2.includes(5));
//filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
const arr3 = [1,2,3,4,5,6];
const filtered = arr3.filter(num => num > 3);
console.log(filtered);
//reduce:aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor
const arr4 = [1,2,3,4,5,6,7];

const sum = arr4.reduce((total, value) => total + value, 0);
console.log(sum);
//some:verifica si algún elemento de un array cumple con el test implementado por la función brindada. Si se aprueba, devuelve “true” de lo contrario “false”
const arr5 = [1,2,3,4,5,6,7,8];
const largeNum = arr5.some(num => num > 4);
console.log(largeNum);

const smallNum = arr5.some(num => num <= 4);
console.log(smallNum);
//every:verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada
const arr6 = [1,2,3,4,5,6,7,8];

const greaterFour = arr6.every(num => num > 4);
console.log(greaterFour);

const lessTen = arr6.every(num => num < 10);
console.log(lessTen);
