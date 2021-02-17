/**findIndex  para encontrar la posición de un array */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar un mes con forEach
meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
        console.log(`${mes} fue encontrado en la posición ${i}`);
    } 
})


//Encontrar el indice de Abril

const indice = meses.findIndex((mes) => {
    return mes === 'Abril';
})

console.log(indice);


// Encontrar un producto en el arreglo de objetos
//findIndex sólo muestra el primero que encuentra

const indice2 = carrito.findIndex((producto) => {
    return producto.nombre === 'Tablet';
})
console.log('El producto está en el indice: '+indice2);




