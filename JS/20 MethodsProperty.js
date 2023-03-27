const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con ID: ${id}`)
    },
    pausar: function(){
        console.log('pausando....')
    },
    crearPlayList : function (nombre) {
        console.log (`Creando playlist: ${nombre}`)
    },
    reproducirPlayList : function (nombre) {
        console.log (`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando cancion con ID: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('JGwtiList')
reproductor.reproducirPlayList('JGwtiList')
