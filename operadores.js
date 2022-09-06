/*Operadores aritmeticos*/
/*Asignacion*/
let numero = 15;
/*uso =, -, *, %, **, */
//numero **= 5;

/*operadores*/
numero--;
numero++;

//resultado = numero;
resultado = numero**2;
resultado = numero++;

/*concatenacion*/

let bienvenida = '!Bienvenida!'
let question = 'Como estas?'

resultado = bienvenida+question;

/*concatenacion 1*/

let numero1 = 13;
let numero2 = 34;

resultado = ""+numero1+numero2;

/*concatenacion 2*/

let nombre = "josimar leon";
let frase = `soy ${nombre} gamer offline`;
let frase2 = "mi nombre es 'josimar' y soy un tigre"


//document.write(frase2);


/*operadores logicos: el = asigna no compara,  ==,===,!=,*/
let numero4 = 12;
let numero5 = 23;

//document.write(numero4!=numero5);

let valor = true;
let valor2 = true;

let result = valor && valor2;

let result2 = valor || valor2;

let result3 = !valor;

document.write(result3);

//document.write(frase2);

/* exercise*/

let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

let op=(num1<num2 || num2<num3)&&(!num1&&num5 !=num3);

document.write(op);