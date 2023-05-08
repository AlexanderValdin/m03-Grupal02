// Fecha actual y mes actual
let fechaActual = new Date();
let mesActual = (fechaActual.getMonth()) + 1;

//comprobar si es trabajador activo

let trabajadorActivo = prompt('La persona es trabajador activo si/no');
while (trabajadorActivo != 'si' && trabajadorActivo != 'no') {
    trabajadorActivo = prompt('Ingrese la respuesta correcta, la persona es trabajador activo \n"si" o "no"');
}

//Comprobar si es carga
let carga = prompt('La persona es carga familiar? si/no');
carga = carga.toLowerCase();
while (carga != 'si' && carga != 'no') {
    carga = prompt('Ingrese la respuesta correcta, la persona es carga familiar \n"si" o "no"');
}


// Obtener el año de nacimiento y mes de la persona (se asume que se ingresan como números)
let anioNacimiento = prompt('Ingrese año de nacimiento');
console.log(anioNacimiento.length);
console.log(fechaActual.getFullYear()-  parseInt(anioNacimiento));
let mesNacimiento = prompt('Ingrese mes de nacimiento (1-12)');
console.log(isNaN(anioNacimiento));

console.log(anioNacimiento, mesNacimiento);

//compruebo que el año y mes ingresado sea válido
while (isNaN(anioNacimiento) || anioNacimiento.trim().length === 0 || ( fechaActual.getFullYear()-parseInt(anioNacimiento)) < 0 ) {
    anioNacimiento = prompt('Ingrese un año de nacimiento válido'); 
}

while (isNaN(mesNacimiento) || mesNacimiento.trim().length === 0 || (fechaActual.getMonth() - mesNacimiento) < 0) {
    mesNacimiento = prompt('Ingrese un mes de nacimiento válido (1-12)');
}

// Calcular la edad actual en años
let edad = fechaActual.getFullYear(); - anioNacimiento; 

if (mesActual < mesNacimiento) {    
    edad--;
}

let respuestaGestacion=prompt('¿La persona está en periodo de gestación?') ;
respuestaGestacion = respuestaGestacion.toLowerCase();
while (respuestaGestacion != 'si' && carga != 'no') {
    respuestaGestacion = prompt('Responda si esta en periodo de gestacion \n"si" o "no"');
}
let rangoEtario;

if(respuestaGestacion=="si"){
    let rangoEtario="Nonato";
}else{
    switch (true) {
        case (anio < 2):
            rangoEtario = "Infante";
            break;
        case (anio < 12):
            rangoEtario = "Niño";
            break;
        case (anio < 18):
            rangoEtario = "Adolescente";
            break;
        case (anio < 65):
            rangoEtario = "Adulto";
            break;
        case (anio < 85):
            rangoEtario = "Adulto Mayor";
            break;
        default:
            rangoEtario = "Años Dorados";
    
    }
}

//año de ingreso y comprobacion de datos
let anioIngreso = prompt('Que año ingreso a la compañia');
while (isNaN(anioIngreso) || anioIngreso.trim().length === 0 || ((2023 - anioIngreso) < 0)) {
    anioIngreso = prompt('ingrese año de ingreso valido');
}
//prompt(anioIngreso);
alert(anioIngreso)
//mes de ingreso y comprobacion de datos
let mesIngreso = prompt('Que mes ingreso a la compañia seleccione el mes desde 1 a 12');
while (isNaN(mesIngreso) || mesIngreso.trim().length === 0 || ((12 - mesIngreso) < 0)) {
    mesIngreso = prompt('ingrese un mes de 1 a 12');
    
}
//prompt(mesIngreso);
alert(mesIngreso)

//prompt(mesActual);
alert(mesActual);

let totalMeses = (( 12- parseInt(mesIngreso)) + ((2023-parseInt(anioIngreso))*12));
//prompt(totalMeses);
alert(totalMeses);

/*if (trabajadorActivo == "si" && anioIngreso>0) {

}*/

//alert(carga);

//Se requiere un mensaje para los trabajadores activos que indique la cantidad de meses que faltan para completar el año (siguiente) de permanencia en la organización.

let anioCompleto;
if((fechaActual.getFullYear()-anioIngreso>0)){
    if (mesActual + 1 === mesIngreso) {
        anioCompleto = 0;
    } else {
        if (mesActual + 1 > mesIngreso) {    
            anioCompleto = 12-mesIngreso;
        }else{
            anioCompleto = mesIngreso-mesActual;
        }
    }
} else {
    if (mesActual + 1 > mesIngreso) {    
            anioCompleto = 12-mesIngreso;
        }else if(mesActual + 1 < mesIngreso){
            anioCompleto = mesIngreso-mesActual;
        }else{
            anioCompleto=12;
        }
}

/* const diffAnios = anioActual - anioIngreso;
const diffMeses = mesActual - mesIngreso;

if (diffAnios > 0) {
    anioCompleto = diffMeses >= 0 ? 12 - mesIngreso : mesIngreso - mesActual;
} else {
    anioCompleto = diffMeses > 0 ? 12 - mesIngreso : mesIngreso === mesActual ? 12 : mesIngreso - mesActual;
}
 */


