/*Trabajando con strings
* No se puede iniciar con comillas sencillas y terminar con dobles
* Escapar comillas es con \
* */

const product = "Monitor de 20\"";//Utilizar comillas simples o dobles ya lo hace un string
const product2 = String('Monitor de 24" pulgadas');//String va con mayuscula la primer letra(capital letters)

const product3 = new String("Monitor 27 pulgadas");//Crear un nuevo objeto de tipo string

console.log(product);
console.log(product2);
console.log(product3);