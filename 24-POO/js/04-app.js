//Propiedades privadas en JS

// class declaration
class Cliente {
    // Cuerpo de la clase

    #nombre;
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    //Método estático, no requiere una instancia para mandarse llamar
    static bienvenida() {
        return `Bienvenido al Cajero`;
    }
}

const norman = new Cliente('Norman', 200);
console.log(norman.mostrarInformacion()); //Funciona porque llamo la propiedad privada desde la clase
//console.log(norman.#nombre); //Marca error


class Cliente2 {
    // Cuerpo de la clase

    #nombre;
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const alex = new Cliente2();
alex.setNombre('Alexander');
console.log(alex.getNombre())
