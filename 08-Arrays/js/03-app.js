/**Recorrer un Array */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);

//Cuanto mide el arreglo **Comienza en 1 
console.log(meses.length);


//Iterador para recorrer el arreglo - for loop 
// meses.lenght -> este código va a correr 

for(let i=0; i < meses.length; i++){
    console.log(i);
}

for(let i=0; i < meses.length; i++){
    console.log(meses[i]);
}



