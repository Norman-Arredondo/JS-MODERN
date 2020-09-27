


//object literal
const producto = {
    nombre:"Monitor 20 pulgadas",           //nombre -> propiedad o nombre del objeto
    precio: 300,
    disponible: true
}


//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"

//Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);