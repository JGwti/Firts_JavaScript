// para crear Arrays usamos []

const numeros = [10,20,30,40,50];
console.log(numeros);

// Constructor
const meses = new Array('Enero','Febrero','Marzo');

//Los arreglos pueden tener todo tipo de valores

const mix = [1,'a',true, null,{nombres: "Javier", edad:28}];

console.table(mix); // verificar el indice

//Acceder al array
console.log(mix[4]);

//Contar el tamaño del array
console.log("El Tamaño del array es de " + meses.length);

//Acceder a todos los indices de un array
//iteracion con forEach
meses.forEach(function(meses){
    console.log(meses);
});

meses[3]= 'Abril';// agregar elementos en la posicion 

//Metodo Push
meses.push('Mayo','Junio');// agrega siempre al final

//Metodo Unshift
meses.unshift('1','0'); // agrega siempre al inicio

//eliminar datos del array
meses.pop(); // elimina el ultimo del arreglo
meses.shift(); // elimina el primero del arreglo
meses.splice(2,2); // elimina segun el indice y apartir de esa posicion elimina la continiacion

// el mejor enfoque para no alterar los arrays original se debe crear un nuevo array

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Diciembre'];
console.table(nuevoArreglo);


