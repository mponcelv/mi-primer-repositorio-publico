// arreglos
//coleccion de elementos
//cada elemnto ocupa una posicion
// esa posicion se conoce como indice y comienza a partir de 0

let arr = [1,2,3,4];
console.log(arr);

//propiedades - describen
//metodos - acciones que peuden realizar 


console.log(arr[2]);
arr[4] = 190;
arr[4] = "hola"
console.log(arr);


//metodos de arreglo 

const arreglo = ["adios"];

//push agrega valores al final
arreglo.push(2);
arreglo.push(true);
let num = 500;
arreglo.push(num);
console.log(arreglo);

//inshift agraga elemntos al inicio del arreglo

arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

console.log(typeof (arreglo[4]));


//metodos para quitar elementos
//pop() quita del final del arreglo

 let dato1 = arreglo.pop();
console.log(dato1);
console.log(arreglo);

//shift() 
//quita un elemento del inicio del arreglo
let dato2 = arreglo.shift();
arreglo.shift();
console.log(arreglo);


//splice()
//quita una elemento de cualquier posicion de nuestro arreglo
// replazar un elemnto
//insertar un elemento en una posicion especifico

arreglo.splice(1, 1, "parangara");
//primer numero posicion inicio,segundo valor elemntos a afectar
//alemento que queremos insertar
console.log(arreglo);


//modifian el arreglo original
//metodos qu eno modificanel arreglo original
//hacen una copia, modifican esa copia

//slice()
//coratr partes de un arreglo
 let dato3 = arreglo.slice(0, 2);
//slice posicion apartir de la cual va a cortar

 console.log(dato3);
 console.log(arreglo);

