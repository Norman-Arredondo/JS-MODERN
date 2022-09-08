/** Obtener datos de LocalStorage */

const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON)); // Lo convierte en Objeto

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse( meses ); // Lo convierte a un Array
console.log(mesesArray);