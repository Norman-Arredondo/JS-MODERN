/**DETECTAR CUANDO EL HTML ESTÁ LISTO */

console.log(1)
//DOMContentLoaded es un evento que se ejecuta cuando es descargado todo el HTML
// Este evento espera a que el documento esté listo
//Siempre va a ser una función anónima después de la coma
document.addEventListener('DOMContentLoaded', () => {
    console.log('2')
})

console.log(3)