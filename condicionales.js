/**
 * *    Funciones - Bloque de Ejecucion
 */

{
    alert('Hola Gente');
    document.write('soy josimar')
}


/**
 * * Condicionales - ifelse : si la condicion es true el bloque se ejecuta
 */
let nombre = 'Pedro';

function condicion() {
    if (nombre == 'lucky') {
        alert(`tu nombre es buenardo ${nombre}`)
    } else if(nombre == 'Pepe'){
        alert(`tu nombre es malardo ${nombre}`)
    }else{
        alert(`tu nombre es otro`)
    }
}

condicion();

