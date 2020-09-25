/*String Methods - Repeat & Split*/

const producto = 'Monitor de 20 Pulgadas';

// .repeat te va a pedir repetir una cadena de texto

const texto = ' en promoción'.repeat(3);//repetir 3 veces; si ponemos un número decimal lo redondea a entero
console.log(texto);

console.log(`${producto} ${texto} !!`);

// Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));