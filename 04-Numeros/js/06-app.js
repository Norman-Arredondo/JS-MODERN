const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1));//Convertir a entero
console.log(Number.parseFloat(numero2));//Convertir a flotante
console.log(Number.parseInt(numero3));//NaN



//Revisar si un nímero es entero o no
console.log(Number.isInteger(numero4));//true