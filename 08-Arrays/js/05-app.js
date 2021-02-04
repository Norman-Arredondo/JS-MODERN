/**Añadir nuevos elementos al fin o al inicio de un arreglo */

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

carrito.push(producto2); //Agregar al final del arreglo sin conocer la extensión del arreglo 
carrito.push(producto);
carrito.unshift(producto3);//Agregar al principio


console.table(carrito);