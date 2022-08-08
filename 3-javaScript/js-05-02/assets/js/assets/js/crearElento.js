

//crear un elemento


const imagen = document.createElement("img");
//modificar los atributos html desde elementos
imagen.src = 'https://placeimg.com/200/200/any';
imagen.alt = 'imagenes aleatorias de animales';



// lo insertamos en un elemento padre modifica atributes para imagenes
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen);
document.body.insertAdjacentElement("afterend", imagen);
document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);

//forma correcta de crear e insertar un elemento
//1- se crea el elemento qque contara la imagen
//2- seleccionar el elemento padre

const padreImg = document.getElementById('padreImg');

//3- crear el elemento
const imagen2 = document.createElement('img');

//4- modificamos los atributos del elemento
imagen2.src = "https://placeimg.com/300/300/nature";
imagen2.alt = "iamagenes de naturaleza";

//5- insertar elemento
padreImg.appendChild(imagen2);



//utilizar forEach para pin tar datos

const frutas = ["toronja", "manzana", "mandarina", "Limon", "granada", "melon"];

const listFrutas = document.getElementById ('frutas');

// forma 1

/* frutas.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element
    listafrutas.appendChild(li);

}); */

frutas.forEach((el) => {
   listFrutas.innerHTML += `<li>${el}</li>`;


});


