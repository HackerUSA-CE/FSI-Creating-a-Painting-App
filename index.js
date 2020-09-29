let canvas = document.querySelector('.canvas')

canvas.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'blue';
})

// Bonus
canvas.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white';
})