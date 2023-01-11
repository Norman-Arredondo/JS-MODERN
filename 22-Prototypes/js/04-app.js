//Heredar un Prototype


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


/*Agregar más funciones al tipo de objeto cliente y que sean exclusivas únicamente en las 
instacias de nuevo cliente*/

//1. Nombre de la Clase o del tipo de objeto
//2. un punto . porque van a ser objetos 
//3. escribir prototype 
//4. escribir un . y el nombre del nuevo proto
//5. igual a una función 

Cliente.prototype.tipoCliente = function() {
    console.log(this.saldo) //El proto mantiene la referencia hacia el objeto actual

    // Evalúa el saldo que ingresamos en la instancia
    let tipo;
    if(this.saldo > 10000){
        tipo ='Gold';
    } else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{ 
        tipo = 'Normal';
    }
    return tipo;
}

//En este proto mandamos a llamar la el prototipe tipoCliente y nos regresa la información
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }` 
    //Se puede hacer referencia a propiedades del objeto o a otros protos
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); //call - método que manda a llamar una función / Ponemos Cliente porque es la clase de la que vamos a heredar
    this.telefono = telefono; //No existe en Cliente
}

//Heredar las funciones -> debe ser antes de instanciarlo
Persona.prototype = Object.create(Cliente.prototype); //funcion diseñada para copiar el proto y asignarlo hacia otra función
Persona.prototype.constructor = Cliente;
//Instanciarlo

const juan = new Persona('Juan', 5000, 56184576);
console.log(juan)

console.log(juan.nombreClienteSaldo()); //Podemos usar las funciones de cliente porque estamos heredando


Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`; 
}

console.log(juan.mostrarTelefono())