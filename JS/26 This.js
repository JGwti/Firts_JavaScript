//This

const reservacion = {
    nombre:'Javier',
    apellidos:'Gutierrez',
    total:5000,
    pagado:false,
    informacion: function (){
        console.log(`El Cliente ${this.nombre} ${this.apellidos} reservo y su totalidad a pagar es ${this.total} `)
    }
}
reservacion.informacion();

