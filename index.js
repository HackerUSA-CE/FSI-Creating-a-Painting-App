let selectedColor = 'blue'
const canvas = document.querySelector('.canvas')

canvas.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor;
})

const colorChoices = document.querySelectorAll('.color-choice')
for(let i = 0; i < colorChoices.length; i ++){
    colorChoices[i].addEventListener('click', function(){
        selectedColor = colorChoices[i].id
    })
}