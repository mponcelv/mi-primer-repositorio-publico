//funciones


/*
function sumar (numero1 , numero2) {
console.log("voy a sumar");
console.log("el resultado de la suma es:" + (numero1 + numero2)); // el signo de mas es para unir texto con numero 
}


sumar(6 + 7);
*/

// ejercicio 2 usando funciones

/*
function calculadoraSueldo (sueldoIngresaado, diasTrabajados, semanasTrabajados) {

    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    
    const sueldo = sueldoIngresaado;
    const diasSemana = diasTrabajados;
    const semanasMes = semanasTrabajados;
    
    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));
    
}

calculadoraSueldo(200, 2, 4)
calculadoraSueldo(150, 5, 2)
calculadoraSueldo(50, 6, 4)
*/

//calculadora de porcentaje

function calcularPorcentaje (numero, porcentaje) {

    let resultado = numero * porcentaje;
    
    return resultado;
}
 let resultadoFuncion = calcularPorcentaje(100, 0.40);
 console.log(resultadoFuncion);




