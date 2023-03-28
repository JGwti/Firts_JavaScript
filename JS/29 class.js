// clases
class Producto {
    constructor(nombre, precio) {
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this,this.precio}`;
    }

    returnPrecioProducto(){
        return `el producto tiene un valor de ${this.precio} pesos`;
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop de 15"', 500, false);
   
class Libro extends Producto{
    constructor (nombre, precio, cod){
        super(nombre, precio);
        this.cod = cod;
    }
}
const libro = new Libro('JS', 60, '461352');
console.log(producto2);
console.log(libro.formatearProducto())
console.log(producto2.formatearProducto())


console.log(producto2);
console.log(producto3);
