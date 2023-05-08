//Declaramos una fecha actual igual a un objeto de la clase Date.
// De la clase hacemos una instancia, por  ende un objeto es una instancia de una clase
let fechaActual = new Date();

//declaramos la variable anioNacimiento que almacena el  elemento input de id anioNacimiento y así con la variable mesNacimiento
// variables que almacenan los distintos elementos de html con sus respectivos id;
let esEmbarazo = document.getElementById('esEmbarazo');
let mesesEmbarazo = document.getElementById('mesesEmbarazo');
let anioNacimiento = document.getElementById('anioNacimiento');
let mesNacimiento = document.getElementById('mesNacimiento');
let esTrabajadorActivo = document.getElementById('trabajadorActivo');
let esCargaFamiliar = document.getElementById('cargaFamiliar');
let anioIngreso = document.getElementById('anioIngreso');
let mesIngreso = document.getElementById('mesIngreso');

// Esto le da al atributo max del input del anioNacimiento un valor igual al año actual.
anioNacimiento.max = fechaActual.getFullYear().toString();
anioIngreso.max = fechaActual.getFullYear().toString();

// Elementos por defecto disabled, cambia al seleccionar esEmbarazo = false;
anioNacimiento.disabled = true;
mesNacimiento.disabled = true;
esTrabajadorActivo.disabled = true;
esCargaFamiliar.disabled = true;
anioIngreso.disabled = true;
mesIngreso.disabled = true;

esEmbarazo.addEventListener("change", function () {
    if (esEmbarazo.value === "false") {
        anioNacimiento.disabled = false;
        mesNacimiento.disabled = false;
        esTrabajadorActivo.disabled = false;
        anioIngreso.disabled = false;
        mesIngreso.disabled = false;
        esCargaFamiliar.disabled = false;
        mesesEmbarazo.disabled = true;
    } else {
        anioNacimiento.disabled = true;
        mesNacimiento.disabled = true;
        esTrabajadorActivo.disabled = true;
        esCargaFamiliar.disabled = true;
        anioIngreso.disabled = true;
        mesIngreso.disabled = true;
        mesesEmbarazo.disabled = false;
    }
})


esTrabajadorActivo.addEventListener("change", function () {
    if (esTrabajadorActivo.value == "false") {
        anioIngreso.disabled = true;
        mesIngreso.disabled = true;
    } else {
        anioIngreso.disabled = false;
        mesIngreso.disabled = false;
    }
})


// Cuando se ingrese un número menor al mínimo o uno mayor al máximo los deja como el mínimo o máximo respectivamente
const inputNumber = document.querySelector("input[type='number']");
const minValue = inputNumber.getAttribute("min");
const maxValue = inputNumber.getAttribute("max");

inputNumber.addEventListener("input", function () {
    const value = parseInt(this.value);
    if (value < minValue) {
        this.value = minValue;
    } else if (value > maxValue) {
        this.value = maxValue;
    }
});

let edad;
let rangoEtario;

anioNacimiento.addEventListener('change', function () {
    // el año debe ser válido.
    // De qué maneras puede ser inválido el anio de Ingreso?
    if ((parseInt(anioNacimiento.value) < parseInt(anioIngreso.value) 
    && 
    parseInt(anioNacimiento.value) < fechaActual.getFullYear())) {
        document.getElementById('anioNacimientoError').style .display= 'block';
    } 
    else  {
        document.getElementById('anioNacimientoError').style.display='none';
        edad = fechaActual.getFullYear() - parseInt(anioNacimiento.value);
        if (fechaActual.getMonth() < parseInt(mesNacimiento.value)) {
            edad--;
        };
        
        switch (true) {
            case (edad < 2):
                rangoEtario = 'Infante';
                break;
            case (edad < 12):
                rangoEtario = 'Niño';
                break;
            case (edad < 18):
                rangoEtario = 'Adolescente';
                break;
            case (edad < 65):
                rangoEtario = 'Adulto';
                break;
            case (edad < 85):
                rangoEtario = 'Adulto mayor';
                break;
            case (edad >= 85):
                rangoEtario = 'Años dorados';
                break;
        };
        }
});

let meses;

mesNacimiento.addEventListener('change', function() {
    // De qué manera  puede ser inválido el mes de nacimiento?

    if(parseInt(anioNacimiento.value) === fechaActual.getFullYear() 
        &&
        parseInt(mesNacimiento.value) > fechaActual.getMonth()) {
            document.getElementById('mesNacimientoError').style.display = 'block';
    }   else { 
        meses = parseInt(mesNacimiento.value) <= fechaActual.getMonth() ? meses = fechaActual.getMonth() - parseInt(mesNacimiento.value) : 12 + fechaActual.getMonth() - parseInt(mesNacimiento.value) ;
        document.getElementById('mesNacimientoError').style.display = 'none';
    }
});

mesIngreso.addEventListener('change', function () {
    //mes válido, considerando el año
    // De qué manera puede ser inválido el mes de Ingreso?
    
    if (parseInt(anioIngreso.value) === fechaActual.getFullYear()
        &&
        parseInt(mesIngreso.value) > fechaActual.getMonth()) {
        document.getElementById('mesIngresoError').style.display = 'block';
        //cambiar por clase que ingrese advertencia
    } else {
        document.getElementById('mesIngresoError').style.display = 'none';
    }
});

anioIngreso.addEventListener('change', function () {
    // año válido
    //Inválido si es mayor al año actual o si es menos al año de Nacimiento , o no?
    if (parseInt(anioIngreso.value) < parseInt(anioNacimiento.value)) {

        document.getElementById('anioIngresoError').style.display ='block';
    } else {
        document.getElementById('anioIngresoError').style.display= 'none';
        console.log(parseInt(anioNacimiento.value) - parseInt(anioIngreso.value));
    }
});



// crear función validación form 

// escuchar el submit 
document.addEventListener('submit', function (event) {
    event.preventDefault();
    if (esEmbarazo.value == "true") {
        document.getElementById('respuestaForm').innerHTML = `Nonato con ${mesesEmbarazo.value} meses de gestación y sin carga familiar`;
    } else {
        if(esTrabajadorActivo.value == "false") {
            document.getElementById('respuestaForm').innerHTML = `La persona es un ${rangoEtario}, ${esCargaFamiliar.value} es carga familiar con ${edad} años y ${meses} meses`
        } else {
            aniosActivo = fechaActual.getFullYear() - parseInt(anioIngreso.value);
            if (fechaActual.getMonth() < parseInt(mesIngreso.value)) {
                aniosActivo--;
            };
            mesesActivo = parseInt(mesIngreso.value) <= fechaActual.getMonth() ? meses = fechaActual.getMonth() - parseInt(mesIngreso.value) : 12 + fechaActual.getMonth() - parseInt(mesIngreso.value);
            mesesRestantes = 12 - mesesActivo;
            document.getElementById('respuestaForm').innerHTML = `La persona es un trabajador activo con ${aniosActivo} años y ${mesesActivo} meses en la organizacion y en ${mesesRestantes} meses cumple el proximo año`
        }
    }
})
