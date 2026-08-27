/**
 * Condicionales:
 * Serie de condiciones para que algo suceda
 *
 * En programación para el manejo de estas condiciones tenemos:
 *
 * ! El bloque if else
 * ? Bloque if pregunta por una condición en caso de que esta condición sea:
 * ? - verdadera: ejecuta un bloque de código-
 * ? - falso: no ejecuta nada.
 * ? else maneja la ejecución de código en caso negativo.
 *
 * Lo que se coloca dentro del if, debe ser algo que genere:
 * * un valor True o False (tipo de dato boolean)
 *
 * TODO - EJERCICIO: Código que obtenga la edad del usuario
 * 1. Codigo que obtenga la edad del user
 * 2. Pedir la fecha de nacimiento
 * 3. Tomar el año actual para calcular su edad.
 *
 */

/**
 * Convertir de texto a numero
 * ! Importante
 * Si se trata de convertir algo que no es un  número como resultado, obtendremos NaN (Not a Number)
 */

const actualYear = 2026;
const userBirthYear = prompt("Ingresa tu año de nacimiento");
const userAge = actualYear - Number(userBirthYear);

alert(`Tienes ${userAge} años de edad`);

// TODO - FIN DE EJERCICIO

/**
 * TODO: Operadores lógicos
 * Sirven par ahacer operaciones cuyo resultado es Verdadero o Falso
 *
 * Mayor que >
 * 2 > 1 == True
 * 1 > 2 == Falso
 *
 * Menor que <
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 *
 * Comparador de igualdad ==
 * 2 == 2 == Verdadero
 * 3 == 1 == Falso
 *
 * Mayor o igual que >=
 * 2 >= 2 == Verdadero
 * 2 >= 3 == falso
 *
 * Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 7 <= 5 == Falso
 *
 * Diferente de !=
 * 5 != 4 == Verdadero
 * 5 != 5 == Falso
 *
 * Negación (not) !
 * !Verdadero == Falso
 * !Falso = Verdadero
 */

/**
 * Dentro de los parentesis va la condicion que se va a evaluar.
 * Dentro de las llaves va el codigo que se va a ejecutar en caso de que la condicion sea Verdadero.
 */

// TODO - EJERCICIO

if (userAge >= 18) {
    alert("Bienvenido, eres mayor de edad");
} else {
    alert("Aún no puedes pasar, vuelve cuando cumplas los 18");
}

// TODO - FIN EJERCICIO

/**
 * ? Else if
 * Nos permiete evaluar más de una condición.
 * Va asociado a un if.
 */

// TODO - EJERCICIO

if (userAge >= 18) {
    alert("Bienvenido, eres mayor de edad");
} else if(userAge >= 6){
    alert("Felicidades, entraste a la primaria.");
} else if(userAge >= 1){
    alert("Felicidades, sigues en el kinder");
} else {
    alert("Estás muy bebé o aún no has nacido");
}
// TODO - FIN EJERCICIO

/**
 * AND && Es un operador que devuelve
 * ? Verdadero solo si ambos lados de la expresión son Verdadero
 * ? Si un lado es Falso todo el resultado se vuelve Falso.
 * Verdadero &&  Verdadero == Verdadero
 * Verdadero && Falso == Falso
 * Falso && Verdadero == Falso
 * 
 * OR || ES un operador que devuelve
 * ? Falso si ambos lados de la expresión son Falso
 * ? Si un lado de la expresión es Verdadero, devuelve Verdadero.
 * 
 * Verdadero || Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso == Falso
 * 
 * age >= 6 && age <= 12
 * age 7 == Verdadero
 * age 15 == Falso
 * age 5 == Falso
 * 
 * age > 20 || age < 100
 * 
 * age 101 == Verdadero
 */

if(userAge >= 18){
    alert("Bienvenido, eres mayor de edad");
}else if(userAge >= 12 && userAge <= 17){
    alert("Eres un adolescente");
}else if(userAge >=6 && edad <= 11){
    alert("Estás en la primaria");
}else{
    alert("Aún eres un pequeñín");
}

/**
 * ? const birthYear = prompt("Ingresa tu fecha de nacimiento");
 * ? let birthYearPlusTen = Number(birthYear) + 10;
 * ? console.log(birthYear);
 * ? console.log(birthYearPlusTen)
 */
