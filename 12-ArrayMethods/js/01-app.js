/**
 * .includes
 * .some */



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
    if (mes === 'Febrero'){
        console.log(`${mes} Si existe`);
    }
})

//Encontrar si el mes solicitado se encuentra en el arreglo
// .includes sólo funciona en arreglos que sólo tienen un valor vasado en el indice
const resultado = meses.includes('Enero');
console.log(resultado);

//En un arreglo de objtos se utiliza .some
const existe = carrito.some( producto => {
    return producto.nombre === 'celular'
})

console.log(`Con .some se encuentra: ${existe}`);

//En un arreglo tradicional

const existe2 = meses.some ( mes => mes === 'Febrero') 
console.log(existe2);