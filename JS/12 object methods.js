//"use strict" // correr JS en modo estricto
const producto = {
    nombreProducto : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze(producto); // no permite que se agregen mas atributos al objeto
//producto.imagen="ihasdbña.png"
//Object.seal(producto); // no permite que se agregen mas atributos al objeto pero permite modificar
//console.log(Object.isSealed(producto));
//console.log(Object.isFrozen(producto));
console.log(producto);