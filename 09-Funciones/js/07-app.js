/**Cómo se comunican las funciones */

iniciarApp();


function iniciarApp() {
    console.log('iniciando app...');
    secondFunction();
}

function secondFunction() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Norman');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}