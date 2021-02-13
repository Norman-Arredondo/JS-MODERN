/**Arrow Function con un forEach y un map */


/**.map para iterar un Array, y sus diferencias con forEach*/
const carrito = [ 
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700}
];


/**.map
 * Va a llenar una variable con un nuevo arreglo
 */


const nuevoArreglo = carrito.map( (producto) => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`) );



console.log(nuevoArreglo);
