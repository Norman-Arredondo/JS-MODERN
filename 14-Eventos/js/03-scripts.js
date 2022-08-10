/**Eventos sobre los inputs */

const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('input', (e) => {
    if (e.target.value === ''){
        console.log('Campos vacíos')
    }
    
})


//input - todo en uno excepto blur