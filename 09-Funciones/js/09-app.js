/**Añadir funciones en un objeto */

const reproductor = {
    reproducir: function(id) {
        console.log (`Reproduciendo canción con id ${id}`)
    },
    pausar: function() {
        console.log(`pausando...`);
    },
    borrar: function(id) {
        console.log(`Borrando canción... ${id}`)
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlayList('Rock 90s')