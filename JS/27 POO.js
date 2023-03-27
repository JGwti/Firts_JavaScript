//POO
//Object literal
const product = {
    name: 'tablet',
    price: 500,
}

//object constructor
//una clase es el contenedor de toda la forma de los datos y metodos y funciones en un objeto
function Producto(nombre, precio, disponible) {
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop de 15"', 500, false);
const producto4 = new Producto('Celular"', 30, true);
const producto5 = new Producto('Nevera"', 500, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);