/** Funciones en Obejtos para acceder a sus valores*/

//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",           //nombre -> propiedad o llave del objeto
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);

    }
}

const producto2 = {
    nombre: "Tablet",           //nombre -> propiedad o llave del objeto
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);

    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
