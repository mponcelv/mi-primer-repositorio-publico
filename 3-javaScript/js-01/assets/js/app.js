/* tipos de datos */
"use strict";

/* tipops de variables */
let a; /* local */
const b = 0; // local
var c; // global


const PI = 3.1416;

/* scope- contexto
espacio en el que vive la variable */



//string
let cadena = "Hola MUndo!";
let cadena2 = "Hola MUndo!";

//Number
let numero = 5;
let numero1 = 5.89;
let numero2 = -5.89;

//BooLean
let boolean;
console.log(Boolean);
let booleano = true;
let booleano2 = false;

//undefined
let variable;
/* console.log(variable + 5) */

//null
let vacio = null;
console.log(vacio);



//Nan - not a number
//no es un numero
//tratar de realizar alguna operacion aritmetica con algun dato qeu no es un numero

/* platillas literarias
template String 
literal string interpolacion */
console.log(`esta es una cadena ${5 + 4}`);
console.log("esta es una cadena normal ${5+4}");

let nombre = `Maciel`
//let presentacion
console.log("Mi nombre es" + nombre);
console.log(`Yo me llamo ${nombre}`);

console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`);

// arreglo -matices - arays

let arr = [1, "A", null, undefined, [true, false]];

//notacion de corchetes
/* console.log(arr[4[0]]); */

if(arr.legth >= 5){
    console.log("tiene mas de 5 elementos");
}


let arr2 = new Array("B", 2);
console.log(arr2);


/* objetos */
//clave / valor

const obj = { 
    nombre: `Maciel`, 
    edad: `31`,
    hobbies: [
        "leer", 
        "ver sherk 1 y 2",
        "comer"
    ],
    auto: {
        marca: "VW",
        modelo:"pointer",
        year: "2000"
    },

    saludar: function(){
    
    console.log("hola")
}

};

persona.nombre = "Maciel"

//notaciond e punto
console.log(`Mi nombre es ${persona.nombre}`);

console.log(`Mihobbie favorito es ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es ${persona.auto.marca}`)

console.log(`la reaccion que realizo es: ${persona.saludar()}`);