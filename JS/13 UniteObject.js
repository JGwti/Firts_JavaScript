const producto = {
    nombreProducto : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso : "1kg",
    medida : '1m',
}

const nuevoProducto = {...producto, ...medidas};
// Spread Operator se usa para evitar mutar los objetos usando ...antes del objeto

console.log(nuevoProducto);