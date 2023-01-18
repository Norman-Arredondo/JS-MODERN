// Definiendo e instanciando una clase

// class declaration
class Cliente {
    // Cuerpo de la clase

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

//Instanciamos
const norman = new Cliente ('norman', 1000);
console.log(norman)

// class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const norman2 = new Cliente2('alex', 2000);
console.log(norman2)