
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//Escribe un comando para remover a "Dani" del arreglo

personas.splice(1 , 1);
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"

personas.splice(2 , 1);
console.log(personas);


//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.unshift(personas.splice(1,1)[0]);
console.log(personas);


//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("maciel");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf("Maria"));


//Escribe el comando para mostrar la posición de tu nombre

console.log(personas.indexOf("maciel"));


// arreglo multidimencinal
const newArr = [1, 45, "hola", "adios", true, null,[30, 31, 32], ["azul", "amarillo", "verde"] ];

console.log(newArr);
console.log(newArr[6][1]);
console.log([7][1]);


//objetos
//estructura especial llamada objeto
//key   -    value
//llave  -  valor

const obj = { nombre : "pedro", 
  edad : 31,
color : "azul",
hobbies : [ "leer", "correr"],
newArr : newArr

};

console.log(obj.edad);
console.log(obj. hobbies[1]);




