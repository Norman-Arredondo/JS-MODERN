// Heredar una clase
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

//Herencia 
//Hereda sus métodos y propiedades
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){

        //Para heredar atributos del constructor padre hay que usar super();
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //Reescribir un método
    static bienvenida() {
        return `Bienvenido al Cajero de Empresa`;
    }

}

//Instanciamos
const norman = new Cliente ('norman', 1000);
const empresa = new Empresa('Código con Juan', 500,553025896547, 'Aprendizaje en línea');
console.log(empresa)
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())
console.log(Cliente.bienvenida())