 let x = 10;
console.log(x-length); 

let Persona = {
    nombre: 'juan',
    apellido: 'fernandez',
    edad: 23,
    email: 'usuario@servidor.com',
   /*  nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    } */
    idioma: 'es',
get idioma1() {
    return this.idioma.toUpperCase();
},    
    set idioma1 (Lang){
        this.idioma1 = Lang.toLowerCase();

    }

}
console.log(persona.leng);
persona.Lang = 'ES';

console.log(persona.idioma1);
console.log(persona.idioma1);










persona.tel = '5558569875'; 
persona.te1 = '5589632145';
console.log(persona);
let algo = new Object();
console.log(persona.nombre);
console.log(persona.nombreCompleto());

// for in 
for(varPropiedad in persona){
console.log(persona[varPropiedad]);   
}

let personaString = JSON.stringfy(persona)
console.log(personaString);


 let persona = {
    nombre: 'Maciel',
    edad: 31,
    correo: "mponce.escosadinomail.com"
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.correo);


let persona1 = new Object ();
    persona.nombre = "victor";
    persona.edad = 32;
    persona.correo = "mponce.escosa@outlook.com";

