/**.every 
 * 
 * Todos los elementos de un arreglo debe de cumplir con la condición para que sea true 
 * every para todos 
 * some para al menos 1
*/

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado);