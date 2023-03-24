// Tipos de datos
// String o cadena de texto
const producto = "Monitor de 20 \""; // \" sirve para escapar el error de comilla
const producto2 = String("Monitor de 30 pulgadas");// crear String usando constructor
const producto3 = new String("Monitor de 30 pulgadas");// crear String usando constructor termina siendo un objeto

const producto1 = "Monitor HD";// crear String usando constructor


console.log(producto);
console.log(producto1.length); // . length cuenta los caracteres de la variable
//typeof saber que tipo de dato contiene la variable
console.log(typeof producto2);
console.log(typeof producto3);
// IndexOF usado para encontrar la ubicacion de un elememto en la cadena
console.log(producto1.indexOf('jaja')) // si return -1 no existe

// Includes retur true or false
console.log(producto1.includes('H'));
console.log(producto1.includes('jaja'))