
//arreglos

let num = [];
console.log(num);

let arrl = new Array();
console.log(arrl);


// usar un arreglo

const arr = [1,2,3,4,5];
console.log(arr);

//notacion de corchetes
console.log(arr[3]);
arr[5] = 25;
arr[6] = 8;
console.log(arr);
 
//arr[7] = undefined
//arr[8] = undefined
//arr[9] = undefined

arr[10] = 40;
arr[7] = 9;
console.log(arr);

//propiedades de arreglo
//descripcion de nuestro arreglo
console.log(arr . length);

//metodos
//accion que puede realizar arreglo

const frutas = ["manzana" , "platanio" ];
console.log(frutas);

//push()
//agrega un valor al final del arreglo

let fruta = "toronja";

frutas.push("naranja");
frutas.push("fruta");

console.log(frutas);

//pop()
// quita un elemento final del arreglo o saber que se borro


frutas.pop();
 let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

//unshify()
//agrega un elemnto al inicio del arreglo 

frutas.unshift("uva" ,"pera");
let devolver = frutas.unshift("uva" , "pera");
console.log(frutas);
console.log(devolver);


//shift
//elimina un elemnto del inicio del arreglo

frutas.shift(frutas);
 let frtutaQitada = frutas.shift(frutas);
console.log(frutas);

