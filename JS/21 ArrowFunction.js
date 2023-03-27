// ArrowFunction
const sumar = (n1, n2) => {
    console.log (n1 + n2);
}
sumar(5, 10);

const learning = tecnologia => {
    console.log(`aprendiendo lenguaje ${ tecnologia}`)
}
learning('JS')

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
const carrito = [
    { nombre: 'Monitor 20 pg', precio: 500},
    { nombre: 'Television 50 pg', precio: 600},
    { nombre: 'Teclado', precio: 25},
    { nombre: 'Audifonos', precio: 30},
    { nombre: 'Celular', precio: 300},
    { nombre: 'Laptop', precio: 700}
];

//Arrow Function en forEcah
meses.forEach ( mes => {
    if(mes=='Marzo')
        console.log('Marzo si existe')
})
// Arrow Function con some
resultadoSOme = carrito.some(product => product.nombre === 'Laptop');
console.log(resultadoSOme);
//Reduce
// nos sirve para realizar operaciones matematicas devolviendo un unico valor
resultadoReduce = carrito.reduce(( total, producto ) => {
    return total*producto.precio
}, 1);
console.log(resultadoReduce);


// Filter sirve para obtener elementos espesificos  del array
resultadoFilter = carrito.filter( producto => producto.precio > 400);
console.log(resultadoFilter);

resultado = carrito.filter( producto => producto.nombre !== "Celular");
console.log(resultado);