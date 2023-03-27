
function sumar(n1,n2){
    return n1 + n2;
}
const resultado = sumar(2, 3);
console.log(resultado);

let total=0;

function agregarCarrito(presio) {
    return total += presio;
}

function calcularImpuersto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalpagar = calcularImpuersto(total);
console.log("el total a pagar con impuesto es de "+totalpagar);