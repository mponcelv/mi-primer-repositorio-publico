class Persona{
    

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apaellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set_nombre(nombre){
        this._nombre = nombre;
    }

}




let persona1 = new Persona('Jose', 'Perez');
console.log(persona1);

let persona2 = new Persona('ana','Cruz'),
console.log(persona2);




