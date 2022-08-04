
/*casa tauro*/

 
let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea","Jose"];
console.log(carreritas);

carreritas.splice(4,1);
carreritas.splice(2,0,"andrea");
console.log(carreritas);

/* jose descalificado */
carreritas.pop();
console.log(carreritas);

/* Detrás de Lucia y antes de Roberto se clasifican tres nuevo corredores: Cristobal, Fernanda y Armando
 */

carreritas.splice(1,0,"Cristobal","Fernanda","Armando");
console.log(carreritas);

/* Nuevo concursante */

carreritas.unshift("Federico");
console.log(carreritas);



// CASA VIRGO
'use scrict';
let pedidoPayaso = Number(prompt("Ingresa el numero de payasos: "));
let pedidoMunecas = Number(prompt("Ingresa el número de muñecas: "));

let pesoPayaso = pedidoPayaso * 112;
let pesoMunecas = pedidoMunecas * 75;

let pesoTotal = pesoPayaso + pesoMunecas;
let numPaquetes = 0; 


if (pesoTotal <= 1000) {
  numPaquetes = 1;
} else if (pesoTotal > 1000) {
   numPaquetes = Math.ceil(pesoTotal/1000);
}

alert(`Peso total de muñecas: ${pesoMunecas}g
Peso total de payasos: ${pesoPayaso}g
Paquetas totales a enviar: ${numPaquetes}`);



function convKelvin(a) {
        let resultado = (a + 271.15);    
        return resultado;
}
alert(convKelvin(grado));

let grado2 = parseint(prompt("Inserte un valor en grados Celsius: "));

function convF(b) {
    let resultado = ((b*1.18) + 32);    
    return resultado;
}
alert(convF(grado2));

/* 
Casa de Cancer */ 
let tipoUsuario; 
let gradoUsuario;
let conversor;
let resultado;
let numeroUsuario;

tipoUsuario = prompt("Ingresa el tipo de grados que tienes actualmente y quieres convertir: Celsius, Fahrenheit o Kelvin, recuerda comenzar con mayúscula y escribirlo correctamente");

gradoUsuario = prompt("Ingresa el valor numérico de los grados actuales, ejemplo: 32");

conversor = prompt("Ingresa los grados a los que quieres convertir tu dato actual: Celsius, Fahrenheit o Kelvin, recuerda comenzar con mayúscula y escribirlo correctamente");

numeroUsuario = Number(gradoUsuario);

switch(tipoUsuario){
 case "Celsius":
 switch (conversor) {
 // Celsius a Farhenheit: (1 °C × 9/5) + 32 = 33.8 °F
 case "Celsius":
 alert("No hay nada que convertir, los grados son iguales, es decir: " + numeroUsuario + " grados.");
break;

 case "Fahrenheit":
function formula(gradoUsuario) {
 resultado = ((numeroUsuario) * (9/5))+32; 
 }formula(gradoUsuario);

alert("Tus " + gradoUsuario + " grados Celsius equivalen a " + resultado + " grados Fahrenheit");
 break;

 case "Kelvin":
 //Celsius a Kelvin: 0 °C + 273.15 = 273.15 K
 function formula(gradoUsuario) {
resultado = (numeroUsuario + 273.15); 
}formula(gradoUsuario);

 alert("Tus " + gradoUsuario + " grados Celsius equivalen a " + resultado + " grados Kelvin");
 break;

 default:
break;
 }


 break
 
case "restar":
 console.log("Vamos a restar");
 break

 case "dividir":
 console.log("Vamos a dividir");
 break

 default:
 console.log("No entiendo");
}

