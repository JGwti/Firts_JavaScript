//Funciones
//Permiten tener codigo ordenado
//Es facil de mantener
//Son reutilizables

//Declaracion de la funcion
//se puede registrar la funcion antes del codigo
function sumar() {
    console.log(10 + 10);
}
sumar();// llamar funciones siempre se debe llamar

//Expresión de la función 
//no se puede registrar la funcion antes del codigo
const restar = function (){
    console.log (20-1);
}
restar(); //siempre se debe llamar funciones

// Diferencia entre declaracion y expresion
// JS trabaja en 2 vueltas primero registra o crea las funciones
// en la segunda manda a llamar el codigo


//IIFE
(function( ){
    console.log('esto es una funcion IIFE');
}) (); // se invocan a ellas mismas no es nesesario llamarlas 
       // sirven para protegerlas variables y no permitir que se mesclen con otros archivos
