/**
 * Objetos en JS (JSON) --> JavaScript Object Notation
 * Son una estructura de datos, similar a dicciinarios o mapas.
 * ? Se organiza en pares
 * ? Llave : valor asociado
 * ? Es una estructura de datos desordenada.
 * ? Aqui los datos se obtiene mediante su llave.
 * 
 * ! No son los mismos objetos que los de Programación orientada a objetos.
 * ! Las llaves no se pueden repetir.
 * 
 * Curiosidades
 * Esta notación se volvió el estándar para intercambio de información en tre cliente y servidor en la WEB.
 * JSON (JavaScript Object Notation)
 * 
 */

// Como declarar un objeto
const participante = {
    name : "Natalia",
    lastName: "Coca",
    age: 27,
    isAlive: true,
    sayHi: function () {
        console.log(`${this.name} dice Hola`);
    },
    ch: 71,
}

console.log(participante);
// Como acceder a los valores
// 1. Notacion punto (mas usado)
// 2. Notacion corchete

console.log(`El nombre de la participante es ${participante.name}, obtenido con la notacion punto`);

console.log(`La edad de la participante es ${participante["lastName"]}, obtenido con notacion corchete`);

participante.sayHi();
console.log(participante.sayHi())

// Como agregar un nuevo par llave valor
console.log(participante);
participante.favoriteAnimals = ["Tortuga", "Gatos", "Cuervo"];
console.log(participante);

participante.address = {
    country: "CDMX",
    street: "New Tepito",
    zipcode: 234,
    extNum: 1344,
    interiorNum: 12
}
console.log(participante);

// Como accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto, u otro array);

console.log(`El primer animal favorito de ${participante.favoriteAnimals[0]}`);

console.log(participante.favoriteAnimals);

console.log(`El codigo postal de ${participante.name} es ${participante.address.zipcode}`)

console.log(participante.address);

// Modificar el valor de una llave
participante.age = 25;
console.log(participante.age);

// Eliminar una llave
delete participante.ch;
console.log(participante);

// Como iterar sobre el objeto
for(const llave in participante){
    console.log(`El valor de la llave ${llave} es ${participante[llave]}`);
}