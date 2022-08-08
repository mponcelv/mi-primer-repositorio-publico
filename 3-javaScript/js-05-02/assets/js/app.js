

//getElementBySid()

console.log(document.getElementById("parrafo1"));

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1);

parrafo1.textContent = "hola desde el aprrafo 1";


console.log(parrafo1.textContent);



parrafo1.style.color = 'red';
parrafo1.style.background = "yellow";
console.log(parrafo1-style);

//queryselector()
//etiqueta = p
//clase = .parrafo
//id = #parrafo1

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

//  += agrega a lo escrito algo mas
//\n inserta un salto de linea === br
// \t
parrafo2.textContent += "modificando el contenido desde javascript";

//querySelectorAll() lista de nodos que contiene elementos con caractericticas nodeList

const parrafos = document.querySelectorAll('p');
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem";

//css -font-size
//js - fontSize  -- lower camel case

//modificar los atributos del html
const enlace = document.getElementById("enlace");
console.log(enlace.href);

enlace.href = ""
enlace.target = "_blank";
enlace.textContent = "enlace de youtube";



// remplazar contenido

const parrafo4 = getElementById('parrafo4');
console.log(parrafo4-nodeName);
console.log(parrafo4.textContent);
console.log(document.body.innerHTML);//muestra el html que haya en el interior del elemnto (reemplaza elemento)
console.log(parrafo4.outerHTML);//muestra el contenido html incluyendo el elemento (reemplaza contenido)


/* parrafo4.innerHTML = <a href="https://www.youtube.com"> enlace</a> */

/* 
parrafo4.outerHTML = '<div class="elemento">Este es un dip</div>';
 */

// js permite modificar las clases css
//utilizando style


console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add('elemento');

const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');
}
cambiarColor(); //se agrega clase
cambiarColor(); // se quita la clase



