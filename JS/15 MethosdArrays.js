//Array Methods
const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

//Arreglo de objetos
const carrito = [
    { nombre: 'Monitor 20 pg', precio: 500},
    { nombre: 'Television 50 pg', precio: 600},
    { nombre: 'Teclado', precio: 25},
    { nombre: 'Audifonos', precio: 30},
    { nombre: 'Celular', precio: 300},
    { nombre: 'Laptop', precio: 700}
];
let indice =0;
//forEach se ejecuta una vez por cada indice del arreglo
carrito.forEach(function(producto) {
    indice = indice + 1;
    console.log(producto)
});
//condicional If
meses.forEach(function(mes) {
    if(mes= 'Marzo'){
    console.log('si existe')

    }
});

//Includes
//Los includes funcionan mejor en array planos 
let resultado = meses.includes('julio');

//Some 
//Some se utilisa para arreglos de objetos

resultado = carrito.some(function(product){
    return product.nombre === 'Laptop';
});

//Reduce
// nos sirve para realizar operaciones matematicas devolviendo un unico valor
resultado = carrito.reduce( function( total, producto ) {
    return total*producto.precio
}, 1);

console.log(resultado);

// Filter sirve para obtener elementos espesificos  del array
resultado = carrito.filter( function(producto ) {
    return producto.precio > 400
});
resultado = carrito.filter( function(producto ) {
    return producto.nombre !== "Celular";
});

console.log(resultado);