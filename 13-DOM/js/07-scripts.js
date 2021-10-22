/**Cambiando CSS con JavaScript */

const encabezado = document.querySelector('h1');
console.log(encabezado.style);

//En JS cuando son 2 palabras y tienen un -  este se elimina y la segunda palabra comienza con mayusculas 

encabezado.style.backgroundColor = 'red';

encabezado.style.fontFamily = 'arial';

encabezado.style.textTransform = 'uppercase';



const card = document.querySelector('.card');

//Crear una nueva clase
card.classList.add('nueva-clase', 'segunda-clase');

//Eliminar una clase
card.classList.remove('card');

console.log(card.classList);

