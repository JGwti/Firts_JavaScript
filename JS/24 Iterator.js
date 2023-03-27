// For loop

for (let i = 0;i <= 9; i++){
    console.log(i);
}
//numeros par
for (let i = 1;i <= 100; i++){
    if( i % 2 ===0 ){
        console.log(`El numero ${i} es Par`);
    }
}
// numero Impar
for (let i = 1;i <= 100; i++){
    if( i % 2 === 1 ){
        console.log(`El numero ${i} es Impar`);
    }
}
// ciclo for muy utilizado en las iteraciones del arreglo

const carrito = [
    { nombre: 'Monitor 20 pg', precio: 500},
    { nombre: 'Television 50 pg', precio: 600},
    { nombre: 'Teclado', precio: 25},
    { nombre: 'Audifonos', precio: 30},
    { nombre: 'Celular', precio: 300},
    { nombre: 'Laptop', precio: 700}
];

for( let i = 0;i < carrito.length ; i++){
   console.log (carrito[i].nombre);
}

// While loop
let i = 0; 

while(i <10 ){
    console.log(i);
    i++;
}
let ipar = 1; 

while(ipar <= 10 ){
    if( ipar % 2 ===0 ){
        console.log(`El numero ${ipar} es Par`);
    }
    ipar++;
}
let iInpar = 1; 

while(iInpar <= 10 ){
    if( iInpar % 2 ===1 ){
        console.log(`El numero ${iInpar} es Inpar`);
    }
    iInpar++;
}

//Do While lopp

//let i = 0;

do {
    console.log(i)
    i++
} while (i < 10);

