/* El problema con los objetos */

/* una constante no se puede reasiganar, pero los objetos si */


//object literal
const producto = {
    nombre:"Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
}

producto. disponible = false;
delete producto.precio;
console.log(producto);

