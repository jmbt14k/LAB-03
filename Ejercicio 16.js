let numero = 1;

let numeroTexto = 'valor desconocido';

switch( numero ){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Caso no econtrado';
}
console.log(numeroTexto);