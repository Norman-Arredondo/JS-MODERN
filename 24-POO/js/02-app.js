// Métodos y Métodos estáticos en las classes 
// class declaration
class Cliente {
    // Cuerpo de la clase
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //Método estático, no requiere una instancia para mandarse llamar
    static bienvenida() {
        return `Bienvenido al Cajero`;
    }
}

//Instanciamos
const norman = new Cliente ('norman', 1000);
console.log(norman.mostrarInformacion());
console.log(norman);
console.log(norman.bienvenida());
console.log(Cliente.bienvenida());

// class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const norman2 = new Cliente2('alex', 2000);
console.log(norman2.mostrarInformacion());
console.log(norman2);