const formulario = document.querySelector('#formulario')

/*formulario.addEventListener('submit', (e) => {
    e.preventDefault(e); //prevenir la acción que realizaría - evitar que haga lo que tiene que hacer

    console.log('Buscando...')
    console.log(e.target.method)
    console.log(e.target.action)

})
*/

formulario.addEventListener('submit', validarFormulario)


function validarFormulario(e) {
    e.preventDefault(e); //prevenir la acción que realizaría - evitar que haga lo que tiene que hacer

    console.log('Buscando...')
    console.log(e.target.method)
    console.log(e.target.action)

}