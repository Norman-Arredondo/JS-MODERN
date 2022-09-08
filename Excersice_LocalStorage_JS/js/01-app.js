/** Agregar Elementos a LocalStorage*/

localStorage.setItem('nombre', '1'); // (Llave, valor)

// Llave es cómo vas a hacer referencia a los valores. Cómo vas a optener los valores
// Valor - es lo que puede cambiar
 // LocalStorage sólo almacena Strings

sessionStorage.setItem('nombre', 'Alex');

// Conventir un objeto a un String

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300
};

const productoString = JSON.stringify( producto ); // Convierte el objeto a String
localStorage.setItem('producto', productoString); // Lo agrega a LocalStorage


// Arreglo a String

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));