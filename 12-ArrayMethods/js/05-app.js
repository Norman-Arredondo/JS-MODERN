/**.find */


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//Con un forEach
let resultado = '';
carrito.forEach((producto, index) => {

    if(producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
});

console.log(resultado);


// con .find

const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);


// con . filter para traer a todos los que son Tablet
// si no cumple la confición muestra undefinded
let conFilter;
conFilter = carrito.filter( producto => producto.nombre === 'Tablet');
console.log(conFilter);