/*Acceder a los vaores de un objeto*/

//object literal
const producto = {
    nombre:"Monitor 20 pulgadas",           //nombre -> propiedad o nombre del objeto
    precio: 300,
    disponible: true
}

console.log(producto);


//Sintaxis de punto para acceder a los valores
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombre']);


