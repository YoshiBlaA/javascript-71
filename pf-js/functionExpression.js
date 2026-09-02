// Function expression
const getTriangleArea = function (base, height) {
    return (base * height) / 2;
}

let area = getTriangleArea(20, 24);
console.log(`El area de un triangulo de base 20 y altura 24 es: ${area}`);

/** 
 * Funcion que solicite un numero
 * Es enumero representa el limite de una serie.
 * Mostrar que numeros son pares e impares en una serie de 1 hasta el numero ingresado.
 * 
 * Que sea una function expresssion
 * 
*/

const showEvenOdd = function(limit){
    for(let i = 1; i <= limit; i++){
        console.log(`El numero ${i} es ${i % 2 === 0 ? 'par' : 'impar'}`);
    }
}
// const limit = prompt('Ingrese un numero limite para la serie: ');
showEvenOdd(200);
console.log("Esta es otra ejecucion")
showEvenOdd(10);