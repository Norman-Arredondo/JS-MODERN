/* String Methods -include y length
* */

const producto = 'Monitor de 20';//Utilizar comillas simples o dobles ya lo hace un string

console.log(producto);

//Conocer la cantiad de letras de la cadena de texto
console.log(producto.length);

console.log(producto.indexOf('Monitor'));//En consola nos va a mostrar la posicion en la que se encuentra

console.log(producto.includes('Monitor'));//Muestra en consola true o false; si se encuentra o no
console.log(producto.includes('Tablet'));
console.log(producto.includes('monitor'));
