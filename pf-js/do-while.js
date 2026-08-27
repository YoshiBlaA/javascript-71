/**
 * Do While
 * ! El bucle do while siempre se ejecuta por lo menos una vez al ejecutar primero y luego evaluar.
 * Te permite tener una ejecucion garantizada.
 * 
 * ! Necesita un contador externo.
 * ! No debemos olvidar actualizar dicho contador.
 */

let counter = 200;
do {
    console.log("Hola");
    console.log(counter);
    // Operador de suma y asignacion
    counter++;
} while (counter <= 100);
console.log(counter);

counter = 1;
do {
    if (counter % 2 == 0) {
        console.log(`El numero ${counter} es par`);
    }
    else {
        console.log(`El numero ${counter} es impar`);
    }
    counter++;
} while (counter < 200);