/**
 * * Ejercicio 1: El Cajero (Fácil)
*   * Simula un menú de cajero automático muy simple. El programa debe mostrar tres opciones:
*   
*   * Consultar saldo.
*   
*   * Retirar dinero.
*   
*   * Salir. El programa debe repetirse hasta que el *   usuario elija la opción 3.

 */

// let saldo = 5000;
// let opcUsuario = 0;

// do {
//     opcUsuario = Number(prompt(`
//     Digita una opcion:
//     1. Consultar saldo
//     2. Retirar dinero
//     3. Salir`));

//     switch (opcUsuario) {
//         case 1:
//             alert(`Tu saldo es de: $${saldo}`)
//             break;
//         case 2:
//             const retiro = Number(prompt("Digita la cantidad a retirar:"));
//             saldo -= retiro;
//             break;
//         default:
//             break;
//     }

// } while (opcUsuario !== 3);

// console.log("Hasta luego");

/**
 * ? Ejercicio 2: Contador de Intentos (Media)
 * ? Define una "palabra clave" secreta dentro de tu código. 
 * ? Pide al usuario que intente adivinarla. 
 * ? El programa debe repetirse mientras la palabra sea incorrecta y, al final, mostrar cuántos intentos le tomó al usuario acertar.

 */
// const palabraSecreta = "ardilla";
// let intentos = 0;
// let palabraEscrita = "";

// do {
//     palabraEscrita = prompt("Adivina la palabra secreta:");
//     intentos++;

//     if (palabraEscrita != palabraSecreta) {
//         alert("Esa no era la palabra secreta, intenta de nuevo.");
//     }

// } while (palabraEscrita != palabraSecreta);

// alert(`Felicidades, descubriste la palabra secreta en ${intentos} ${(intentos < 2) ? "intento" : "intentos"}`)

/**
 * ! Ejercicio 3: Serie de Fibonacci Limitada (Difícil)
 * ! Genera y muestra los números de la serie de Fibonacci (0, 1, 1, 2, 3, 5, 8...) uno por uno. 
 * ! El programa debe preguntar al usuario después de mostrar cada número: "¿Deseas generar el siguiente número? (s/n)". 
 * ! El ciclo termina cuando el usuario responde 'n'.
 */

//f = f[n-1] + f[n-2]
//f[0] = 0;
//f[1] = 1; 
//f[2] = 1; --> f[]


let fibo_n_2 = 0;
let fibo_n_1 = 1;
let fibo_n = fibo_n_1 + fibo_n_2;
let respuestaUsr = '';

do {
    alert(`El numero actual generado es: ${fiboAct}`);
    respuestaUsr = prompt("¿Deseas generar el siguiente número? (s/n)");

    fiboSig = fiboAct + fiboSig;

    

} while (respuestaUsr != "n");

