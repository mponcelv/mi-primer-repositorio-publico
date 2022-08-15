//tipo predefinido
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal = {
    nombre: 'juan',
    edad: 35
}

let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
obj_constructor.edad = '23';
console.log(obj_literal);
console.log(obj_constructor);

obj_literal[nombre];
let llave = 'nombre';
console.log('esto es una llave' + obj_literal [llave]);





// define objeto primitivo
let cadena = 'esto es una cadena';

//define tipo cadena de caracteres compuestos
let cadena_Obj = new String('esto es otra cadena obj');
console.log(cadena);
console.log(cadena_Obj);

/* tipo numerico */
let numero = 13;
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);

let lista = ['2','3','5','7'];
let lista_obj = new Array ('1','4','6','8','9');
console.log(lista);
console.log(lista_obj);

