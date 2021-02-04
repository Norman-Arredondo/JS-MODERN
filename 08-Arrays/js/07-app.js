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

const producto4 = {
    nombre: 'Laptop',
    precio: 5000
}

carrito.push(producto2); //Agregar al final del arreglo sin conocer la extensión del arreglo 
carrito.push(producto);
carrito.push(producto4);
carrito.unshift(producto3);//Agregar al principio

/** 
console.table(carrito);


// Eliminar último elemento de un arreglo... 
carrito.pop();

console.table(carrito);

//Eliminar del inicio del arreglo 
carrito.shift();
console.table(carrito);

*/
console.table(carrito);
carrito.splice(1,2); //posición del que quieres eliminar, 

console.table(carrito);