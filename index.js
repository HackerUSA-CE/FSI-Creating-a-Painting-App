let chosenColor ="blue";

let paletteColor = document.querySelectorAll('.color-choice');

function selectColor (e) {
    chosenColor = e.target.id;
    console.log(chosenColor);
}

for (let i = 0; paletteColor.length; i++) {
    paletteColor[i].addEventListener('click', selectColor);
}

let pixels = document.querySelectorAll('.pixels');

function changeColor (e) {
    e.target.style.background = chosenColor;
}

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', changeColor);
}