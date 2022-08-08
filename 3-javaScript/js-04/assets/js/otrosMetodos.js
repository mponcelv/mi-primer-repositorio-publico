//sort()
//ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];
 arr.sort();
 console.log(arr);

 const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
 arr2.sort();
console.log(arr2);
const arr3 = [5,1212,568,1,80];
arr3.sort((a,b) => a-b); //ordenamiento de burbuja ordena numeros de menor a menor y (b-a) de mayor a menor 
console.log(arr3);

//funcion declarada
//hosting, un proceso de reacomodo del codigo
function sumar(a, b ) {
    return a + b;
    
}

console.log(sumar(5, 7));


// funcion expresada
// no funciona el hoisting
const multiplicar = function(a, b){
return a * b;

}

console.log(multiplicar(3,5));


//funcion flecha
const dividir = (a,b) =>{
    return a / b;

}
console.log(dividir(10,2));


//forEach()
// ciclo que recorre en automatico todo el arreglo

const arrNumeros = [1, 4, 6, 8,10];

for(let i=0; i< arrNumeros.length; i++ ){
arrNumeros[i] = arrNumeros[i] * 2;

}

arrNumeros.forEach((elemento, index, arr) => console.log (elemento, index, arr));


console.log(arrNumeros);

//foreach(elemento,indice,arreglo completo)

arrNumeros.forEach((elemento) => 
    console.log(elemento *= 2)
)



