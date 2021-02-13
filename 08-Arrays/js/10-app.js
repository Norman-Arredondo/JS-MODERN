/**.map para iterar un Array, y sus diferencias con forEach*/
const carrito = [ 
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700}
];


/**.forEach */

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})


/**.map
 * Va a llenar una variable con un nuevo arreglo
 */


const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})



console.log(nuevoArreglo);
console.log(nuevoArreglo2);