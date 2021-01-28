/**Congelar un objeto para no poderlo modificar
 * Se tiene que habilidar algo que se conoce como modo estricto
 * Va a exigir que sigas las regalas, evitar malas prácticas
 */

"use strict";

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
}

//Está congelado, lo más parecido a una constante
Object.freeze(producto);
//producto.disponible = false;
//producto.imagen = "imagen.jpg";

//delete producto.precio;

console.log(Object.isFrozen(producto));
//console.log(producto);
