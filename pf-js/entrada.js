/**
 * Prompt
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario.
 *      1.2 Usar el valor inmediatamente.
 * ! Importante
 * 1. No se recomienda su uso en aplicaciones en produccion
 * 2. Bloquea el codigo, esto quiere decir que el codigo que este debajo de donde escribimos el uso ede prompt no se va a ejecutar, asta que el usuario ingrese algo.
 * 3. No se puede personalizar.
 *
 * Nota:
 * ? \n es un caracter que nos inserta un salto de linea
 *
 * 1. Pedir un prompt para obtener una serie o pelicula favoritos
 * 2. Un prompt para obtener un personaje de esa serie, el favorito
 * 3. un prompt para obtener porque es el favorito
 * Resultado: En la serie x sale el personaje x y es mi favorito por x
 */


// const edad = prompt("Ingresa tu edad", 15);
// const nombre = prompt("Ingresa tu nombre");
// console.log(`Hola soy ${nombre} y tengo ${edad} años`);
// alert(`Hola soy ${nombre} y tengo ${edad} años`);

const serieFavorita = prompt("Escribe tu serie o película favorita:");
const personajeFavorito = prompt("Escribe tu personaje favorito de dicha serie o película:");
const razonFavorito = prompt("Escribe la razón por la cual dicho personaje es tu favorit@");

alert(`En la serie ${serieFavorita} sale el personaje ${personajeFavorito} y es mi favorito porque ${razonFavorito}`);