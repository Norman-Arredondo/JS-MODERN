


const dinero = 1000;
const totalApagar = 500;
const tarjeta = true; 

if (dinero >= totalApagar) {
    console.log(`Si podemos pagar`);
} else if (tarjeta) {
    console.log(`Si puedo pagar porque tnego la tarjeta`);
} else {
    console.log(`Fondos insuficientes`);
}