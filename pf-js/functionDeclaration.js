// Declarar la funcion
function saludar() {
    console.log("Hola");
}

// Usar la funcoin (invocar o llamar)
saludar();
saludar();
saludar();

// Funcion con parametros
function saludarConNombre(name, edad) {
    console.log(`Hola ${name} mucho gusto en conocerte. No sabia que tenias ${edad} annios`);
}

saludarConNombre("Josue", 32);
saludarConNombre("Liz", 27);
saludarConNombre(27, "hola");


/**
 * Funcion que retorna algo
 * ! Immportante
 * Cuando usamos return
 * ! 1. Termina la ejecuacion de la funcion
 */
function multiplyTwoNumbers(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else{
        return "Por favor envia dos numeros";
    }
}
// Aqui no voy a ver nada
multiplyTwoNumbers(2, 3);

 console.log(multiplyTwoNumbers(3,5));
 console.log(multiplyTwoNumbers(3, "josue"));