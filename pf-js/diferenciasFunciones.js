/**
 * Diferencias
 * 
 * Hoisting
 * Es un proceso por el cual las function declaration y las variables escritas con var, pasan a estar hasta arrib en el proceso de ejecucion.
 * 
 * Function Expression y Arrow Function no pasan por este proceso.
 */

console.log("Function declaration", multiplyNumbers(20, 6));

const addNumber = function (a, b) {
    return a + b;
}

const divideNumbers = (a, b) => a / b;

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(divideNumbers(10, 2));

// 1. Crear una funcion
// 2. No tiene parametros
// 3. Tampoco tiene return
// 4. El usuario debe adivinar el numero secreto
// 5. Usar bucles y condicionales
// 6. El usuario tiene tres intentos
// 7. Si el usuario ingresa el numero incorrecto, darle una pista.
//      7.1. El numero secreto es mayor o el numero secreto es menor.
// 8. Usar math.random para generar el numero secreto.

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const game = () => {
    const randNumb = getRandomInt(1, 11);
    for (let tries = 1; tries <= 3; tries++) {
        const userNum = Number(prompt("Adivina el numero secreto entre  1 y 10, ingresa un entero: "));
        if (userNum === randNumb) {
            alert(`Felicidades, adivinaste el numero secreto (${randNumb}) en ${tries} ${tries === 1 ? "intento" : "intentos"}`);
            break;
        } else if (userNum < randNumb) {
            alert("El numero secreto es mayor");
        } else {
            alert("El numero secreto es menor");
        }

        if (tries > 2) {
            alert(`Perdiste, el numero secreto es ${randNumb}`);
        }
    }
}

game();