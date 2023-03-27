const puntaje = 1001;
//condicional === igual
if (puntaje === 1000){
    console.log("El puntaje es igual a 1k");
} else {
    console.log("No es igual a 1k")
}
//condicional !== diferente
if (puntaje !== 1000){
    console.log("El puntaje es igual a 1k");
} else {
    console.log("No es igual a 1k")
}
// Mayor que
const efectivo = 1000;
const carrito = 1800;

if (efectivo > carrito){
    console.log('El usuario puede realizar compras ')
} else {
    console.log('El usuario no tiene fondos suficientes ')

}

const rol = 'EDITOR';

if(rol==="ADMINISTRADOR"){
    console.log('Acceso a todo el sistema');
}else if (rol === 'EDITOR') {
    console.log('Acceso restringido solo para editar')
} else {
    console.log('No tienes permisos')
}