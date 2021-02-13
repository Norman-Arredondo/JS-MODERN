/**Parametros por Default  */

function saludar(nombre, apellido = 'No hay apellido') {
    console.log(`Hola ${nombre} ${apellido}`);

}

saludar('Norman', 'Arredondo');