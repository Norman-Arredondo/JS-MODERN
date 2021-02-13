/**Switch case */

const metodoDePago = 'efectivo';

switch(metodoDePago){
    case 'efectivo': 
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con un ${metodoDePago}`);
        break;
    default: 
        console.log(`Aun no has seleccionado un método de pago o método de pago no soportado`);
        break;
}

function pagar() {
    console.log('pagando...');
}