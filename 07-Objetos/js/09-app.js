/**Sellar un objeto
 * La diferencia de Freeze y seal es que 
 * Seal si permite modificar las propiedades
 */

"use strict";

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
}

//Sellar un objeto
Object.seal(producto);


producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;


console.log(producto);
console.log(Object.isSealed(producto));
