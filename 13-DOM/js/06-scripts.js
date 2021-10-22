/**Modificar textos o imagenes en JS */

const encabezado = document.querySelector('.contenido-hero h1').textContent; //Agregar .textContent -> encadenamiento o changing 
console.log(encabezado);

//Acceder al texto en mi codigo de JavaScript
console.log(encabezado.innerText); //Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); //Se trae el HTML

//Modificar un encabezado
document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

//Modificar una imagen
const imagen = document.querySelector('.card:nth-child(2) img');
imagen.src = 'img/arriba.jpg';