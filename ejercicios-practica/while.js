/**
 * * Fácil (Validación simple): Pide al usuario que ingrese un número positivo. Si el usuario ingresa un número negativo o cero, el programa debe seguir pidiendo el número hasta que sea válido. Al final, imprime el número aceptado.
 */

// let numero = 0;

// while(numero <= 0){
//     numero = Number(prompt("Ingresa un numero positivo:"));
// }

// console.log(numero)


/**
 * ? Media (Acumulador): Crea un programa que pida números al usuario y los vaya sumando. El ciclo debe detenerse cuando el usuario ingrese el número 0. Al terminar, muestra la suma total.
 */

// let suma = 0;
// let numeroUsuario = 12348;

// while(numeroUsuario !== 0){
//     numeroUsuario = Number(prompt("Digita el numero a agregar en la suma o digita 0 para terminar"));

//     suma += numeroUsuario;
// }
// console.log(`La suma total es ${suma}`);

/**
 * ! Difícil (Potencia manual): Solicita una base y un exponente (ambos enteros positivos). Calcula el resultado de elevar la base al exponente utilizando únicamente un ciclo while y sumas/multiplicaciones. No utilices funciones de librería como Math.pow().
 */

// const base = Number(prompt("Digita la base a exponenciar:"));
// let exponente = Number(prompt("Digita el exponente de tu base"));
// let resultado = base;

// while(exponente > 1){    
//     resultado *= base;
//     exponente--;
// }
// console.log(`El resultado es ${resultado}`);