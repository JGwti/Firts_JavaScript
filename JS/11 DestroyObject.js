const producto = {
    nombreProducto : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}
//Forma antigua para estraer propiedades de un objeto
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);

// Destructuring object

const {disponible, precio } = producto; // siempre usar {}

console.log(precio );
console.log(disponible);
