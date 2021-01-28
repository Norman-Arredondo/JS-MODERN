/*Acceder a los vaores de un objeto*/

//object literal
const producto = {
    nombre:"Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
}

console.log(producto);


//Los objetos tienen algo que se conoce como Sintaxis de punto para acceder a los valores
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//En lugar de un punto usas corchetes y en un string usas la llave 
console.log(producto['nombre']);


