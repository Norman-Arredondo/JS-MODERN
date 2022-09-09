// MomentJS para formatear fechas


const diaHoy = new Date();

moment.locale('es');
console.log(moment().format('MMMM Do YYYY h:mm:ss a')); // septiembre 8º 2022 11:51:25 pm

console.log(moment().format('LLLL', diaHoy)); // jueves, 8 de septiembre de 2022 23:52

console.log(moment().add(3, 'days').calendar()); // Dentro de 3 días