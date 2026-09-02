/**
 * Callbacks
 * Es una funcion que se pasa como argumento a otra funcion, para ser ejecutrada en el momento que la funcion que recibe el callback lo decida.
 * 
 * ? funciones ciudadanos de primera clase
 * todas las funciones on tratadas como si fueran un valor/
 * 
 */

function procesarPago(nombreCliente, callback, cuenta) {
    const saldoAPagar = callback(cuenta);
    console.log(`el cliente ${nombreCliente} debe pagar ${saldoAPagar} despues de impuestos`);
}

/**
 * Opciones para la funcion de callback
 * 1. Crear una funcion aparte y luego mandarla como argumento.
 * 2. Crear una funcion anonima dentr ode los parentesis de la funcion principal.
 */

function addIVA(cuenta) {
    return cuenta * 1.16;
}

procesarPago("Josue", addIVA, 2000);

console.log("------------Callback con funcion anonima------------");
procesarPago("Carlos", function (cuenta) {
    return cuenta * 1.20;
    },
    2000
);

console.log("------------Callback con arrow function------------");

procesarPago("Javier", (cuenta) => cuenta * 1.3, 2000);

