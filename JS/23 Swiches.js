
const metodoPago ='efectivo';

switch (metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario pagara con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('El Usuario pago con efectivo');
        break;
    default:
        console.log('aun no has pagado')
        break;
    


}