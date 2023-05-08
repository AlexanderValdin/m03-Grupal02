//Clase rango etario
let respuestaGestacion=prompt('¿La persona está en periodo de gestación? si/no') ;
respuestaGestacion = respuestaGestacion.toLowerCase();
while (respuestaGestacion != 'si' && respuestaGestacion != 'no') {
    respuestaGestacion = prompt('Responda si esta en periodo de gestacion \n"si" o "no"');
}

let fechaActual = new Date();

let rangoEtario;

if(respuestaGestacion=="si"){
    rangoEtario = "Nonato";
    //Se solicita el mes de nacimiento
    let semGestacion = prompt('Ingrese las semanas de gestación');
    console.log(isNaN(semGestacion))
    
    //Se comprueba que el mes ingresado sea válido
    while (isNaN(semGestacion) || semGestacion.trim().length === 0 || (40 - semGestacion) < 0) {
        semGestacion = prompt('Ingrese una semana de gestación válido');
    }

    alert("Nonato, sin edad ni es carga familiar");
    
}else{
    //Se solicita el año de nacimiento (se asume que se ingresan como números)
    let anioNacimiento = prompt('Ingrese año de nacimiento');
    //Se comprueba que el año ingresado sea válido
    while (isNaN(anioNacimiento) || anioNacimiento.trim().length === 0 || (fechaActual.getFullYear() - anioNacimiento) < 0) {
        anioNacimiento = prompt('Ingrese un año de nacimiento válido');      
    }
    
    //Se solicita el mes de nacimiento
    let mesNacimiento = prompt('Ingrese mes de nacimiento (1-12)');
    console.log(isNaN(mesNacimiento));
    
    
    //Se comprueba que el mes ingresado sea válido
    while (isNaN(mesNacimiento) || mesNacimiento.trim().length === 0 || (12 - mesNacimiento) < 0 || (12 - mesNacimiento) > 11 ) {
        mesNacimiento = prompt('Ingrese un mes de nacimiento válido (1-12)');
    }
    
    // Calcular la edad actual en años
    let anios = fechaActual.getFullYear() - anioNacimiento;
    let meses = (fechaActual.getMonth() + 1 ) - mesNacimiento;
    
    if (fechaActual.getMonth() + 1 < mesNacimiento) {    
        anios--;
    }

    switch (true) {
        case (anios < 2):
            rangoEtario = "Infante";
            break;
        case (anios < 12):
            rangoEtario = "Niño";
            break;
        case (anios < 18):
            rangoEtario = "Adolescente";
            break;
        case (anios < 65):
            rangoEtario = "Adulto";
            break;
        case (anios < 85):
            rangoEtario = "Adulto Mayor";
            break;
        case (anios >= 85):
            rangoEtario = "Años Dorados";
            break;
    }
    
    //Comprobar si es carga
    let carga = prompt('La persona es carga familiar? si/no');
    carga = carga.toLowerCase();
    while (carga != 'si' && carga != 'no') {
        carga = prompt('Ingrese la respuesta correcta, la persona es carga familiar \n"si" o "no"');
    }
    
    //comprobar si es trabajador activo
    let trabajadorActivo = prompt('La persona es trabajador activo si/no');
    while (trabajadorActivo != 'si' && trabajadorActivo != 'no') {
        trabajadorActivo = prompt('Ingrese la respuesta correcta, la persona es trabajador activo \n"si" o "no"');
    }
    if (trabajadorActivo == 'no') {
        //no es trabajador activo
        
        alert(`La persona es un ${rangoEtario}, es carga familiar con ${anios} años y ${meses} meses`)
    }else {
        //es trabajador activo
        
        //año de ingreso y comprobacion de datos
        let anioIngreso = prompt('Que año ingreso a la compañia');
        while (isNaN(anioIngreso) || anioIngreso.trim().length === 0 || ((2023 - anioIngreso) < 0)) {
            anioIngreso = prompt('ingrese año de ingreso valido');
        }
        
        //mes de ingreso y comprobacion de datos
        let mesIngreso = prompt('Que mes ingreso a la compañia seleccione el mes desde 1 a 12');
        while (isNaN(mesIngreso) || mesIngreso.trim().length === 0 || ((12 - mesIngreso) < 0)) {
            mesIngreso = prompt('ingrese un mes de 1 a 12');    
        }
        
        let mesActual = fechaActual.getMonth() + 1;

        aniosActivo    = fechaActual.getFullYear() - anioIngreso;
        mesesActivo    = mesActual - parseInt(mesIngreso);
        mesesRestantes = 12 - mesActual + parseInt(mesIngreso);

        alert(`La persona es un trabajador activo con ${aniosActivo} años y ${mesesActivo} meses en la organización y en ${mesesRestantes} meses cumple el próximo año`)

    }
    
}





let totalMeses = (( 12- parseInt(mesIngreso)) + ((2023-parseInt(anioIngreso))*12));

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


