//objetos

const nombreProducto = "monitor 20 pulgadas";
const precio = 300;
const disponible = true;

// forma para crear objetos

const producto = {
    nombreProducto : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

console.log (producto.nombreProducto); //acceder a las propiedades del objeto
console.log (producto["precio"]); // menos usada

//agregar o quitar propidades del objeto
// agregar propiedad
producto.imagen = "asds.jpg";

// eliminar propiedad del objeto
delete producto.disponible;// se usa cuando se debe selecionar los atributos traidos de una tabla

console.log (producto);


