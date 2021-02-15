/**for ... in  */
// for in itera sobre objetos
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente in pendientes) {
    console.log(pendiente);
}


const automovil = {
    modelo: 'Camaro',
    year: 19,
    motor: '6.0',

}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}