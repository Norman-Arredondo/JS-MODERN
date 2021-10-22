

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//Con un arrow function
/*
btnFlotante.addEventListener('click', () => {
    console.log('diste click en el boton');
});
*/

//Con una función
btnFlotante.addEventListener('click', mostarOcutarFooter);

function mostarOcutarFooter() {
    console.log('diste click en el botón');
}