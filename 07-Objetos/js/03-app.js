//Agregar o Eliminar Propiedades de un objeto


//object literal

/*Podemos agregarlo aquí*/
const producto = {
    nombre:"Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
    /*Podemos agregar otra propiedad aquí*/
}


//Agregar nuevas propiedades al objeto después ya en la ejecución del proyecto
//Con la sintaxis de punto podemos agregar más valores, pero que no sea un nombre ya existente o lo vamos a reescribir
//Como ya estamos afuera del objeto, uamos el signo =
producto.imagen = "imagen.jpg"

console.log(producto);

//Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);