/**Eliminar elementos del DOM */

//Eliminar un elemento por si mismo
/*
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);
*/


//Eliminar desde el padre

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);// Los diferentes elementos que son hijos

navegacion.removeChild(navegacion.children[2]);


