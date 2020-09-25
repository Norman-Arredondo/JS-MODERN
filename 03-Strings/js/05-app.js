/*String Methods - Remplace, Slice y Substring*/

const producto = 'Monitor de 20 Pulgadas';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace(' Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));


//.slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(2));
console.log(producto.slice(2,1));//No va a hacer nada

// Alternativa a slice
console.log(producto.substring(2,1));//Ve que el primero es mayor y los invierte

const usuario ="Norman";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));//corta la primer letra
