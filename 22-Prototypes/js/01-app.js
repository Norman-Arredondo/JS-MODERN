/** Qué  es el Proto y Crear un tipo de objeto Nuevo*/

// Todos los Objetos tienen un proto 
// Object Literal. Es la menos dinámica
// No permite crear objeto dinámicos ni reutilizables
const cliente = {
    nombre: 'Norman',
    saldo: 500
}


console.log(cliente);


// Object Constructor

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Es reutilizable y puedo crear multiples instancias
// Permite crear objetos dinámicos y reutilizables
const norman = new Cliente('Norman', 500); // Nueva instancia del cliente

console.log(norman)