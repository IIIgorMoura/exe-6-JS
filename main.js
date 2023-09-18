let chances = 10

// sorteio valor
let min = 1;
let max = 100;

let valor = Math.floor(Math.random() * (max - min + 1) + min);
// fim sorteio valor
// conferir
function conferir() {
    let valorInserido = document.getElementById('chute').value;

    if (valorInserido == valor) {
        document.getElementById("resposta").innerHTML = "Certa resposta!";
        menu()
    } else if (valorInserido < valor) {
        chances--;
        document.getElementById("chances").innerHTML = chances;

        document.getElementById("correcao").innerHTML = "Tente um valor MAIOR";
    } else if (valorInserido > valor) {
        chances--;
        document.getElementById("chances").innerHTML = chances;

        document.getElementById("correcao").innerHTML = "Tente um valor MENOR";
    }

    if (chances < 1) {
        menu()
    }
}


// fim conferir

// MENU
// exibirMenu
function menu() {
    let jogo = document.getElementById('jogo');
    jogo.style.display = "none";

    let menu = document.getElementById('menu');
    menu.style.display = "flex";

    if (chances < 1) {
        document.getElementById("resposta").innerHTML = "Você perdeu!";
    }
    
    document.querySelector('#resultado').textContent = valor;
}
// fim exibirMenu
// reiniciar
function reiniciar() {
    chances = 10;
    document.getElementById("chances").innerHTML = chances;

    let menu = document.getElementById('menu');
    menu.style.display = "none";

    let jogo = document.getElementById('jogo');
    jogo.style.display = "flex";

    // Atualiza o valor existente em vez de criar um novo
    valor = Math.floor(Math.random() * (max - min + 1) + min);
    document.querySelector('#resultado').textContent = valor;

    document.getElementById("correcao").innerHTML = "Insira um valor de 1 a 100";
}
// fim reniciar
// FIM MENU