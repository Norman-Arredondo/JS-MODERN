/** El Object Constructor */

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true,

}

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
    this.disponible = true; 

}

const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('SmartTV', 3000);
console.log(producto3);