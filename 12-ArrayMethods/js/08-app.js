/**Spread Operator */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


// Spread operator con un arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

//Spread Operator con un arreglo con objetos 


const producto = {nombre: 'Disco duro', precio: 300}

//Creamos una copia del arreglo y asignamos el objeto sin Spread Operator para evitar el error de is not iterable 
const carrito2 = [...carrito, producto];

console.log(carrito2);