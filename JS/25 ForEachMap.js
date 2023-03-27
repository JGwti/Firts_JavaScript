const carrito = [
    { nombre: 'Monitor 20 pg', precio: 500},
    { nombre: 'Television 50 pg', precio: 600},
    { nombre: 'Teclado', precio: 25},
    { nombre: 'Audifonos', precio: 30},
    { nombre: 'Celular', precio: 300},
    { nombre: 'Laptop', precio: 700}
];

// ForEach y map solo se ejecutan en arreglor
//forEach usar para consola o html diseñado para iterar y mostrar resultados
carrito.forEach( producto => console.log(producto.nombre));
console.log('');
// map crear nuevos arreglos 
 const newArray = carrito.map( producto => ` ${producto.nombre} - ${producto.precio}`);
 console.log(newArray);