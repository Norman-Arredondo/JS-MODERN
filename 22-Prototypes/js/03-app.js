// Object Constructor

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

// Instanciarlo 
const pedro = new Cliente("Pedro", 6000);
console.log(pedro.tipoCliente() ); // un método - Ahora es sólo de Cliente
console.log(pedro.nombreClienteSaldo() ); //mensaje
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo() ); //mensaje


console.log(pedro);
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea');
console.log(CCJ);


//Diferenca entre function(){ } y Arrow function es aparte de la sintaxis,
//el funcion busca en el objeto actual y arrow function en la ventna globlal