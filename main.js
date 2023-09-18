let button = document.getElementById('sortear');

button.addEventListener('click', function() {
    let min = 1;
    let max = 100;

    let resultado = Math.floor(Math.random() * (max - min + 1) + min);


    document.querySelector('#resultado').textContent = resultado;
});