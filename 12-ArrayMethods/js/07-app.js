/** . concat */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

//.concat
//Si quiero agregar un nuevo elemento, es posible
const resultado = meses.concat(meses2, meses3, 'Diciembre');
console.log(resultado);

// spread operator
//Si quiero agregar otro mes, es posible, pero si utilizo spread operator CREA UN NUEVO ELEMENTO POR CADA LETRA 
const resultado2 = [...meses, ...meses2, ...meses3, 'Diciembre'];
console.log(resultado2 );



