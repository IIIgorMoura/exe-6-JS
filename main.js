let chances = 5

// sorteio valor
let min = 1;
let max = 100;

let valor = Math.floor(Math.random() * (max - min + 1) + min);

document.querySelector('#resultado').textContent = valor;
// fim sorteio valor
// conferir
function conferir() {
    let valorInserido = document.getElementById('chute').value;

    if (valorInserido == valor) {
        document.getElementById("resposta").innerHTML = "Certa resposta!";
    } else if (valorInserido < valor) {
        chances--;
        document.getElementById("chances").innerHTML = chances;

        document.getElementById("resposta").innerHTML = "O valor inserido é MENOR do que o valor sorteado";
    } else if (valorInserido > valor) {
        chances--;
        document.getElementById("chances").innerHTML = chances;

        document.getElementById("resposta").innerHTML = "O valor inserido é MAIOR do que o valor sorteado";
    }
}


// fim conferir