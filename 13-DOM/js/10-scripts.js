/**Generar HTML con JavaScript */

// p , h1, a .... 
const enlace = document.createElement('A');//crear elementos, se pone la etiqueta que se está utilizando
//Agregando el texto
enlace.textContent = 'Nuevo enlace'

//Añadiendo href
enlace.href = '/nuevo-enlace'

console.log(enlace);


//Seleccionar la navegación 

navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); //Lo agrega al final de los hijos

// console.log(navegacion.children); para ver las posiciones

//Atributos personalisados

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion; 

navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert('diste click');
}


//Crear un card de forma dinámica

//Creando los parrafos con su texto y clases
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent ='Concierto de Rock'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo2.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');

// Crear el card 
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

// Asignar info
card.appendChild(info);

//Insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);




console.log(info);