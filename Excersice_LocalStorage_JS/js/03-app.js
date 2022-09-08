/** Eliminar y actualizar elementos de LocalStorage */

localStorage.removeItem('nombre'); // Elimina un elemento

// Actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log( mesesArray );

mesesArray.push('Nuevo Mes');
console.log( mesesArray );

// No hay un update, pero puedes sobreescribir el valor
localStorage.setItem( 'meses', JSON.stringify( mesesArray ));


localStorage.clear(); // Limpiar todo