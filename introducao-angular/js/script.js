function mudarCor() {
    let nome = document.getElementById("textoAlterado");
    nome.style.backgroundColor = 'lightblue';
    nome.innerHTML = "Palmeiras não tem...";
}

function somar() {
    debugger;
    let primeiroValor = document.getElementById("primeiroValor").value;
    let segundoValor = document.getElementById("segundoValor").value;
    let resultado = document.getElementById("resultado");
    let somar = parseInt(primeiroValor) + parseInt(segundoValor);

    resultado.value = somar;
}