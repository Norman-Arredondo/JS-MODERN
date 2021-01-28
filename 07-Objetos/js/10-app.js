/**Copiar 2 objetos */

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true
}

//object literal
const medidas = {
    peso: '1kg',
    medida: '1m'
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

//Spread Operator o Rest Operator
/**Los 3 puntos significan copiar */
const resultado2 = { ...producto, ...medidas }

console.log(resultado);
console.log(resultado2);

