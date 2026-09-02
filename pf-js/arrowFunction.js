/**
 * Funciones flecha (arrow functions)
 * 
 * ! Importante
 * Return implicito
 * Quiere decir que si tu funcion se puede escribir en una sola linea sin necesidad de llaves, no es necesario poner la palabra return.
 * La expresion a la que apunte la flecha sera retornada.
 * 
 * Expresiones lambda
 */

const addTwoNumbbers = (a, b) => a + b;
let result = addTwoNumbbers(3, 4);
console.log(`El resultado de la suma de 3 y 4 es: ${result}`);

const evenOrOdd = (limit) => {
    let total = 0;
    for(let i = 1; i <= limit; i++){
        console.log(`El numero ${i} es ${i % 2 === 0 ? 'par' : 'impar'}`);
        total += i;
    }
    return total;
}
console.log(evenOrOdd(100));