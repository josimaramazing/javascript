 /**
 * * Declaracion de variables = datos primitivos tipos string, boolean, number y symbol
 * TODO: var, let y const
 * TODO: Las variables undefined existen pero no tienen valor y null al inicializar una variable nula.
 * * scope : Se puede declarar e inicializar mas de una variable en un mismo dato.
 * * NaN : 
 * * let : Es un tipo de dato con mayor cobertura (Se recomienda su uso)
 * ? las variables de tipo const pueden cambiar de valor
 */
var firstName = "Josimar";
let lastName ="Leon";
const nickName = "Cachorro";
let age = 30;
let boolean = true;
let date;
let model = null;
let number1, number2, number3;
number1 = 2;
number2 = 3;
number3 = 5;

/**
 * * CONST
 */
function exerciseOne() {
    nickName = "jota";
    document.write(nickName+'<br>');
}
exerciseOne();

/**
 * * UNDEFINED
 */
function exerciseTwo() {
    document.write(date+'<br>');
}
exerciseTwo();

/**
 * * NULL
 */
 function exerciseThree() {
    document.write(model+'<br>');
}
exerciseThree();

/**
 * * NaN
 */
 function exerciseFour() {
    document.write(age*lastName+'<br>');
}
exerciseFour();

/**
 * * PROMPT
 */

 function exerciseFive() {
    let play = prompt('Hola eres gamer?');
    alert('Si yo Juego '+ play);
}
exerciseFive();

