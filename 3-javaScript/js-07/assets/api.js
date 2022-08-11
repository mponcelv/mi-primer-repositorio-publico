//url para consumir

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

//elementos del dom
const imagenPerrito = document.getElementById("img-perrito");
const btn = document.getElementById("img-perrito");
console.log(btn);
//eventos
btn.addEventListener("click", () => {
    console.log("boton presionado");

    //agregar la funcionalidad
obtenerPerritoAleatorio()



})


function obtenerPerritoAleatorio(url){
const respuesta = await fetch(url)
const datos = await respuesta.json()
console.log(datos);
console.log(datos.message);
console.log(datos.status);

imagenPerrito.src = datos.massage

}

obtenerPerritoAleatorio(urlAleatorios)