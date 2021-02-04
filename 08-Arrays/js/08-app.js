/**Destructuring de Arrays */

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
}

//Para acceder a una propiedad podemos usar la sintaxis de punto
//console.log(producto.nombre); //Monitor 20 pulgadas

/* Si quiero asignarle este valor a su propia variable  */
//const llave = producto.nombre;


//Destructuring (Sacar de una estructura)
/* const { nombre de las llaves que se va a extraer el valor} = nombre del obejto que se extrae el valor
 * Va a extraer la propiedad y va a crear la variable en un solo paso
 * 
*/
const { nombre } = producto;
console.log(nombre);


//Destrucuring con Arreglos 

const numeros = [10,20,30,40,50];


//const [ , , tercero] = numeros;

const [ primero, ...segundo] = numeros;



console.log(segundo);