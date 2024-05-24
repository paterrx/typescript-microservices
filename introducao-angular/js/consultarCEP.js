function consultarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarResultado(data))
    .catch(error => alert(error))
}

function mostrarResultado(data) {
    console.log(data)
    debugger
    
}