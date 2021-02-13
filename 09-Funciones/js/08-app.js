/**Ejemplo con multiples funciones que se pasan valores */

/*
function sumar2(a, b) {
    console.log(a + b);
}

sumar2(3, 2);

function sumar(h, d) {
   return h+d;
}

const resultado = sumar(21, 1);
console.log(resultado);
*/

//Ejemplo más avanzado
let total = 0;
function agregarCarrito(precio) {
    return total +=precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);