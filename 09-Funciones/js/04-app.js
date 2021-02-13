/**Difference between Function and Method  */

const numero1 = 20; 
const numero2 = "20";

console.log( parseInt(numero2) ); // Esto es una función

console.log( numero1.toString() ); //Esto es un método

//Function Declaration

function sumar () {
    console.log(2+2);
}

sumar(); 