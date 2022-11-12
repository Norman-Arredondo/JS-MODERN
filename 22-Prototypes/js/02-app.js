// Object Constructor

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Instanciarlo 
const juan = new Cliente("Juan", 500);
console.log(formatearCliente(juan));

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente; //Para no poner cliente.nombre
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa; //Para no poner cliente.nombre
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría de ${categoria}`;
}

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea');
console.log(formatearEmpresa(CCJ));

//Prototype sólo para proyectos grandes 
// Como no se documenta el código, el proyotype ayuda a que puedes agregar funciones que son sólo para algunas funciones 