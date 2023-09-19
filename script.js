let btnNaranja = document.getElementById("naranja");
let btnAzul = document.getElementById("azul");
let btnRojo = document.getElementById("rojo");
let imgChange = document.getElementById("imgChange");

let btnBuy = document.getElementById("btnBuy");
let fondo = document.getElementById("fondo");

let sizeColor = document.getElementById("size-div");
let size = sizeColor.querySelectorAll('span');

function sacarId (color, ruta_imagen) {

    imgChange.src = ruta_imagen
    btnBuy.style.backgroundColor = color;

    fondo.style.setProperty('--color-fondo', color)

    size.forEach(Element => { // Esto es como hover de CSS pero en Javascript
        let id = Element.id;
        //console.log(id) // Recorre el div e imprime sus id
        
        document.getElementById(id).onmouseenter = function(){
            document.getElementById(id).style.backgroundColor = color
        }

        document.getElementById(id).onmouseleave = function(){
            document.getElementById(id).style.backgroundColor = "#fff"
        }
    }); 
}

btnNaranja.onclick = function() {
    sacarId("#FC6D22", "./img/jordan-naranja.png")
}

btnAzul.onclick = function() {
    sacarId("#2960B4", "./img/jordan-azul.png")
}

btnRojo.onclick = function() {
    sacarId("#E43F4C", "./img/jordan-rojo.png")
}