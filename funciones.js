/** funciones */
function saludar() {
    return 'todo oka';
}

let saludo = saludar();

document.write(saludo);

/** funciones - parametros*/

function suma(num1,num2) {
    let res = num1+num2;
    document.write(res);
    document.write('<br>');
}

suma(12,34);
suma(62,34);

/** funciones - parametros, flecha*/

const saludare = function(nombre) {
    let frase = `!Hola ${nombre} como estas?`;
    document.write(frase);
}

const saludare2 = (nombre) =>{
    let frase = `!Hola ${nombre} como estas bro?`;
    document.write(frase);
}

const saludare3 = nombre => document.write('hola')
saludare3("pedro");



