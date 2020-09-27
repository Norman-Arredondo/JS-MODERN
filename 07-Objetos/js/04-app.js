



//object literal
const producto = {
    nombre:"Monitor 20 pulgadas",           //nombre -> propiedad o nombre del objeto
    precio: 300,
    disponible: true
}


//const nombre = producto.nombre;
//console.log(nombre);//Monitor 20 pulgadas

//Destructuring
const {nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
