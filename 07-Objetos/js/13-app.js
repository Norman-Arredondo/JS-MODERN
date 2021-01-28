/** Metodos para objetos Object .keys, .values, .entries */

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true,

}

//muestra un arreglo con las llaves del objeto
console.log( Object.keys( producto));

//Muestra un arreglo con los valores
console.log( Object.values( producto ));

//Muestra todo
console.log(Object.entries( producto));