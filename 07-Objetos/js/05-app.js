/* Objetos dentro de objetos */

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medidas: {
            medida: '1m',
            peso: '1kg'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto);
console.log(producto.informacion.medidas);
console.log(producto.informacion.peso);

/* Acceder a país con sintaxis de punto*/
console.log(producto.informacion.fabricacion.pais);

