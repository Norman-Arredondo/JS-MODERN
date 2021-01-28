/* Destructuring de Objetos anidados */

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


const { nombre } = producto;
console.log(nombre);

//Destructuring de objetos anidados

const { informacion, informacion: {fabricacion: {pais} } } = producto;
console.log(informacion);
console.log(pais);
