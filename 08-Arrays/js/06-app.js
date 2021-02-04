/**Crear un nuevo arreglo con spread operator*/

//Arreglo vacío
const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//Forma imperativa -> No modifica el objeto actual

let resultado;
resultado = [...carrito, producto,producto2];

resultado = [producto3,...carrito, producto,producto2];

console.table(resultado);