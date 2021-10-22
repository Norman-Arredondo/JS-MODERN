/**querySelector
 * 
 * 
 */

 const card = document.querySelector('.card');
 console.log(card);


 //Podemos tener selectores especificos como en CSS

 const info = document.querySelector('.premium .info');
 console.log(info);


 // Selecionar el segundo card de hospedaje
 const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
 console.log(segundoCard);


 //Selecionar el formulario -> Seleciona el primero que encuentra 

 const formulario = document.querySelector('#formulario');
 console.log(formulario);


 //Selecionar elementos HTML

const navegacion = document.querySelector('nav');
console.log(navegacion);