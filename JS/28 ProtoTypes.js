//ProtoTypes
//Object literal
const product = {
    name: 'tablet',
    price: 500,
}

function formatearProducto (producto){
    return `El producto ${product.name} tiene un precio de ${product.price}`;
}

console.log(product);
console.log( formatearProducto ( product));
console.log('------->');


function Producto(nombre, precio, disponible) {
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}
Producto.prototype.formatearProducto=function(){
    return `El producto ${this.nombre} tiene un precio de ${this,this.precio}`;

}
const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop de 15"', 500, false);


console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

//ProtoType Crear funciones que solo se utilizan en un objeto en espesifico

