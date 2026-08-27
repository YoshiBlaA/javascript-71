/**
 * Estructura de datos
 * Que son y por que son importantes?
 * 
 * Son estructuras que nos ayudan a agrupar y/u ordenar datos.
 * Para manipular estos datos de manera mas eficiente.
 * Dato no representa nada por si solo.
 * Datos juntos y dandoles contexto se vuelve informacion.
 * 
 * * Array
 *  Es una estructura de datos ordenada
 * ! Importante
 *  Los datos se identifican por un indice, el indice empieza a contar desde cero.
 * 
 * ! Importante pero particular de JS
 *  Podemos guardar cualquier tipo de dato dentro del array, incluso combinaciones.
 * Tienen tamannio dinamico.
 * 
 */

//  * Definicion de un array
//  ? Array vacio
const arrayVacio = []

//  ? Array con contenido
const arrayContenido = ["Alberto", 20, true];

const months = ["Jan", "March", "April", "June"];
/**
 * Obtencion de un elemento guardado en un array
 * 
 * Notacion corchete
 *  
*/  
console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 * Ingresar datos al array
 * Metodos
 * 
 * 1. Unshift para ingresar elementos al comienzo del array.
 * 2. Push para ingresar elementos al final del array.
 */
console.log("Array antes");
console.log(arrayContenido);
arrayContenido.unshift("Javier");
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.push("Daniel", false);
console.log("Array despues");
console.log(arrayContenido);

/**
 * Eliminar datos
 * 1. Shift elimina y devuelve el elemento en la posicion cero.
 * 2. Pop elimina y devuelve el ultimo elemento del array.
 * 
 * Nota: 
 *  Lo que va dentro de los parentesis de un metodo o funcion se conoce como argumento.
 */

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.shift()
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.pop()
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("Array despues");
console.log(arrayContenido);

/**
 * Reasignar el valor de un indice
 */
let valorAnterior = arrayContenido[0];
arrayContenido[0] = "Liz"
arrayContenido[2] = "Josue";
console.log(`El valor anterior es: ${valorAnterior}`);
console.log(`Resultado de la reasignacion de un elemento`, arrayContenido);

/**
 * Splice
 * Elimina elementos o agrega
 */
console.log("=============SPLICE=============");
arrayContenido.splice(1, 1);
console.log(arrayContenido);
arrayContenido.splice(1, 2);
console.log(arrayContenido);

// Ingresar elementos
months.splice(2,0, "Feb");
console.log(months);
