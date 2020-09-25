/*Contar espacios en blanco de un string*/

const producto = '                        Monitor de 20 Pulgadas          ';

console.log(producto);
console.log(producto.length);


console.log(producto.trimStart());//Elimina los espacios en blanco del principio
console.log(producto.trimEnd());//Elimina el espacio al final

//Métodos de forma encadenada
console.log(producto.trimStart().trimEnd());

//Eliminar de las 2 direcciones
console.log(producto.trim());



