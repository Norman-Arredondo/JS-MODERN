/**Traversing the DOM */

/*
const navegacion = document.querySelector('nav');
console.log(navegacion);

//Listar elementos reales 
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children);   // Los espacios en blanco son considerados elementos



console.log(navegacion.children[0]);

*/

/*
const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';


card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);

*/

//Traversing the Hijo al Padre

/*
const card = document.querySelector('.card');
console.log(card.parentNode); //Toma en cuenta los espacios en blanco 
console.log(card.parentElement.parentElement);

*/
const card = document.querySelector('.card');
console.log(card.nextElementSibling);//Un elemento adelante
console.log(card.nextElementSibling.nextElementSibling);

//Nos ubicamos en el ultimo card
const ultimocard = document.querySelector('.card:nth-child(4)');
console.log(ultimocard.previousElementSibling);//Un elemento atras

const navegacion = document.querySelector('nav');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

