 /**
  * Loops:
  * Son estructuras de control que nos permiten repetir N cantidad de veces un bloque de codigo {}
  * 
  * ? Tenemos tres grandes loops
  * ? While
  * ? Do While
  * ? For
  */

 /**
  * While
  * Es un loop que se ejecuta mientras una condicion sea verdadera. 
  * En cuanto esta condicion se vuelve falsa, para.
  * 
  * !Importante
  * ! Necesita un contador externo u otra forma de parar
  * ! No olvidar actualizar el contador, puedes generar un bucle infinito.
  */

//  1. Contador
 let counter = 0;

//  2. Iniciamos el bucle
while(counter <= 100){
    console.log(counter);
    counter = counter + 1;
}

counter = 0;

while(counter < 200){
    if(counter%2 == 0){
        console.log(`El numero ${counter} es par`);
    }
    else{
        console.log(`El numero ${counter} es impar`);
    }
    counter += 1;
}