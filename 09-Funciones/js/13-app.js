/**Arrow Functions en el reproductor de musica  */


const reproductor = {
    cancion: '',
    reproducir: id => console.log (`Reproduciendo canción con id ${id}`),
    pausar: () => console.log(`pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlayList: nombre => console.log(`Creando la playlist de ${nombre}`),

    //Set - forma de agregar valores
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    // get - forma de obtener valores 
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'EnterSandman';
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlayList('Rock 90s')