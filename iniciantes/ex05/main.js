let containerImgs = document.getElementById('slideshow')
let imgs = [
    './img/img-1.jpg',
    './img/img-2.jpg',
    './img/img-3.jpg'
];

let tempo = 3000;
let contador = 0;

function moverSlideShow() {
    containerImgs.src = imgs[contador]; // containerImgs recebe a 1º imagem do ARRAY (posição 0)

    if (contador < imgs.length - 1) {
        contador++;
    } else {
        contador = 0;
    }

    setTimeout('moverSlideShow()', tempo);
}

window.onload = moverSlideShow;
