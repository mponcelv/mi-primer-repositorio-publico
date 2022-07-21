//control de flujo 

/* let nombre = "maciel"
let edad = 31; */

/*
let nombre = prompt("escribe tu nombre");
console.log(nombre);

let edad = (prompt("escribe tu edad") );
console.log(edad);


if(nombre === "maciel" && edad === 31){
    //scope contexto
    console.log("eres un");
   console.log("admin");
   
} else if (nombre === "maria") {
    console.log("eres una mentora");
} else if (nombre === "marina")  {
 console.log("eres la jefa");
} else {
    console.log("eres un alumno");
}

console.log("fin del programa");
*/

let edad = parseInt (prompt ("escribe tu edad"));
console.log(edad);

 
if(edad > 18)  {
    console.log("eres mayor de edad")
    //scope contexto
} else {
    console.log("eres menor de edad")
}