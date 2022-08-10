/**Eventos con el Mouse */

//Selector
const nav = document.querySelector('.navegacion')

//registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav')
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegación')
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('dblclick', () => {
    console.log('entrando a la navegación')
    nav.style.backgroundColor = 'white'
})


//mousedown - similar al click 
//click
//dblclick = doble click
//mouseup = cuando sueltas el mouse 
