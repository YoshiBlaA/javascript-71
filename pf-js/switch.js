/**
 * SWITCH
 * 
 * Es una estructura de control condicional
 * Pero a diferencia del if, no se basas en valores de verdad o de falso.
 * Sino que no se basa en opciones
 * 
 * ? Nos permite tener multiples opciones, y con base en la opcion seleccionada, ejecutar un bloque de codigo.
 * ? Tiene una respuesta por default, por si la opcion infresada no esta en la lista.
 * 
 * ? Se divide en casos
 * ? Cada paso lleva su bloque de codigo y debe llevar al finalizar la palabra "break"
 * 
 * Nota:
 * todo> Expresiones (expression): Es todo aquello que genera un valor
 * * Ejemplos: una suma, usar una variable, usar una funcion, texto, numero.
 * todo> Declaraciones (statement): No genera valor, y por lo general son estructuras de control o bucles.
 * * Ejemplos: el if, el switch, el for, el while.
 */
let month =  prompt("Escribe el mes del año que te gustaría ver");

switch (month) {
    case "Enero" || month:
        alert(`El mes de ${month ? true : false} es el primer mes de año`);
        break;
    case "Febrero":
        alert(`El mes de ${month} es el segundo mes de año`);
        break;
    case "Marzo":
        alert(`El mes de ${month} es el tercer mes de año`);
        break;
    case "Abril":
        alert(`El mes de ${month} es el cuarto mes de año`);
        break;
    case "Mayo":
        alert(`El mes de ${month} es el quinto mes de año`);
        break;
    case "Junio":
        alert(`El mes de ${month} es el sexto mes de año`);
        break;
    case "Julio":
        alert(`El mes de ${month} es el séptimo mes de año`);
        break;
    case "Agosto":
        alert(`El mes de ${month} es el octavo mes de año`);
        break;
    case "Septiembre":
        alert(`El mes de ${month} es el noveno mes de año`);
        break;
    case "Octubre":
        alert(`El mes de ${month} es el décimo mes de año`);
        break;
    case "Noviembre":
        alert(`El mes de ${month} es el undécimo mes de año`);
        break;
    case "Diciembre":
        alert(`El mes de ${month} es el duodécimo mes de año`);
        break;
    default:
        alert("El mes seleccionado no aplica");
}

let pais = prompt(`
    Escribe el país para saber su capital: 
    1. México
    2. España
    3. Argentina
    4. Colombia 
    5. Chile
    `);

switch (pais) {
    case "México":
        alert(`La capital de ${pais} es Ciudad de México`);
        break;
    case "España":
        alert(`La capital de ${pais} es Madrid`);
        break;
    case "Argentina":
        alert(`La capital de ${pais} es Buenos Aires`);
        break;
    case "Colombia":
        alert(`La capital de ${pais} es Bogotá`);
        break;
    case "Chile":
        alert(`La capital de ${pais} es Santiago`);
        break;
    default:
        alert("La opción seleccionada no aplica");
}