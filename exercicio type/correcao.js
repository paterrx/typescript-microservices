"use strict";
let veiculos = [];
function formatarNumero(input) {
    input.value = input.value.replace(/\D/g, '');
    const regexCelular = /^(\d{2})(\d{5})(\d{4})$/;
    const regexFixo = /^(\d{2})(\d{4})(\d{4})$/;
    if (input.value.length == 11) {
        input.value = input.value.replace(regexCelular, '($1) $2-$3');
    }
    else {
        input.value = input.value.replace(regexFixo, '($1) $2-$3');
    }
}
function buscarMunicipios() {
    const uf = document.getElementById("estado");
    if (uf.value == "")
        return;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`;
    fetch(url)
        .then(response => response.json())
        .then(data => adicionarMunicipios(data))
        .catch(error => alert(error));
}
function adicionarMunicipios(data) {
    //console.log(data);
    let municipioSelect = document.getElementById("municipio");
    municipioSelect.innerHTML = "";
    data.forEach((element) => {
        let option = document.createElement("option");
        option.text = element.nome;
        option.value = element.id;
        municipioSelect.appendChild(option);
    });
}
function upgrade(select) {
    const containerUpgrade = document.getElementById("veiculosUpgrade");
    const containerPadrao = document.getElementById("veiculosPadrao");
    if (select) {
        containerUpgrade.classList.toggle("esconderElemento");
        containerPadrao.classList.toggle("esconderElemento");
    }
    else {
        containerUpgrade.classList.remove("esconderElemento");
        containerPadrao.classList.remove("esconderElemento");
    }
}
function save() {
    const matriculaInput = document.getElementById("idMatricula");
    const telefoneInput = document.getElementById("idTelefone");
    const estadoInput = document.getElementById("estado");
    const municipioInput = document.getElementById("municipio");
    const upgradeInput = document.getElementById("upgrade");
    const veiculoInput = document.getElementById("veiculo");
    const veiculo = {
        matricula: matriculaInput.value,
        telefone: telefoneInput.value,
        estado: estadoInput.value,
        municipio: municipioInput.value,
        upgrade: upgradeInput.value,
        nomeCarro: veiculoInput.value
    };
    matriculaInput.value = "";
    telefoneInput.value = "0";
    estadoInput.value = "0";
    municipioInput.value = "";
    upgradeInput.value = "0";
    veiculoInput.value = "";
    veiculos.push(veiculo);
    console.log(veiculos);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
}
