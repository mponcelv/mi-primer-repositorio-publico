// url a consumir
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/25"



//elementos del dom 
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon);
 const idPokemon = document.ATTRIBUTE_NODE.getElementById("id-pokemon")
 console.log(idPokemon);
const nombrePokemon = document.getElementById("nombre-pokemon")
console.log(nombrePokemon);


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
   idPokemon.textContent = 'ID: ${pokemon.id};

}

obtenerPokemon(urlPokemon)