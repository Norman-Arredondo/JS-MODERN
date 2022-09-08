/** El objeto Date() */

// const diaHoy = new Date('2-25-1999');

// const diaHoy = new Date('February 25 1999');  Saber qué día naciste
const diaHoy = new Date();
let valor;

valor = diaHoy;
// typeof las fechas un un objeto

// Get sirve para extraer el valor
valor = diaHoy.getFullYear(); // año actual
valor = diaHoy.getMonth(); // Mes, pero inicia en 0
valor = diaHoy.getMinutes(); // Minuto
valor = diaHoy.getHours(); // la Hora 
valor = diaHoy.getTime(); // Milisegundos desde 1 de enero de 1960

// Set para modificar el valor
valor = diaHoy.setFullYear(2010); // diaHoy está en 2010
console.log(diaHoy);

// Date.now(); No requiere instanciarse