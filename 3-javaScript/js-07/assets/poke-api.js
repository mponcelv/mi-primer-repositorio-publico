// url a consumir
let urlPokemon = "https://pokeapi.co/api/v2/pokemon/25"



//elementos del dom 
const imgPokemon = document.getElementById("img-pokemon")

 const idPokemon = document.ATTRIBUTE_NODE.getElementById("id-pokemon")

const nombrePokemon = document.getElementById("nombre-pokemon")

const listaHabilidades = document.getElementById("lista-habilidades")

const listaTipos = document.getElementById("lista-tipos")
const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);

//eventos
formulario.addEventListenere("submit", (e) =>{
   a.preventDefault()

   console.log("boton");

const inputPokemon = document.getElementById("busqueda pokemon")
console.log(inputPokemon.value);

const nuevaBusqueda = urlpokemon + inputPokemon.value

console.log(nuevaBUsqueda);




})


//funciones
async function obtenerPokemon(url){

   const respuesta = await fetch(url)
   const datos = await respuest.json()

   console.log(datos);
   console.log(datos.forms[0].name);
   console.log(datos.abilities);
   console.log(datos.id);
   console.log(atos.typesd);
   console.log(datos.sprites.others["official-artwork"].front_defaull);





    const pokemon = {
    nombre: datos.forms[0].name,
    habilidades: datos.abilities,
    id: datos.id,
    tipo: datos.types,
    imagen: datos.sprites.others["official-artwork"].front_defaull

   } 

   imgPokemon.src = pokemon.imagen;
   idPokemon.textContent = 'ID: ${pokemon.id}';
   nombrePokemon.textContent = pokemon.nombre

   //habuilidades
   getElementById("lista-habilidades");
   console.log(pokemon.habilidades.length);

let template = ``

   for(let i=0; i < pokemon.habilidades.length; i++){
      const nombrehabilida = pokemon.habilidades[1].ability.name
      console.log(nombreHabilidad);;
   

   template += `<li class="list-group-item"> ${nombreHabilidad} </li>`
} 

    listaHabilidades.innerHTML = template;

//tipos
console.log(pokemon.tipos);

let templateTipos = ""

pokemon.tipos.forEach((tipo) =>{
   
   const nombreTipo =tipo.type.name
   console.log(nombreTipo);

   templateTipos += <li class="list-group-item"> ${nombreTipo}</li>
})

listaTipos


}

obtenerPokemon(urlPokemon)