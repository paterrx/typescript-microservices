"use strict";
let cores = ["vermelho", "azul", "verde"];
let produtos = [];
let corSelect = document.getElementById("cor");
cores.forEach(cor => {
    let option = document.createElement("option");
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option);
});
let tamanhos = ["P", "M", "G", "GG"];
let tamanhoSelect = document.getElementById("tamanho");
tamanhos.forEach(tamanho => {
    let option = document.createElement("option");
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option);
});
function load() {
    const produtosFromStorage = localStorage.getItem('produtos');
    if (produtosFromStorage)
        produtos = JSON.parse(produtosFromStorage);
    let tabelaProduto = document.getElementById("tblProdutos");
    const tbody = tabelaProduto === null || tabelaProduto === void 0 ? void 0 : tabelaProduto.getElementsByTagName("tbody")[0];
    tbody.innerHTML = '';
    produtos.forEach(function (produto) {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = produto.id;
        row.insertCell(1).innerHTML = produto.nome;
        row.insertCell(2).innerHTML = produto.cor;
        row.insertCell(3).innerHTML = produto.tamanho;
        row.insertCell(4).innerHTML = produto.preco;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remover";
        deleteButton.addEventListener("click", function () {
            const idProduto = row.cells[0].textContent;
            const produto = row.cells[1].textContent;
            const mensagem = `Confirma a remoção do produto ${produto}?`;
            if (confirm(mensagem) == true) {
                produtos = produtos.filter(function (produto) {
                    return produto.id !== idProduto;
                });
                row.remove();
                localStorage.setItem("produtos", JSON.stringify(produtos));
            }
        });
        row.insertCell(5).appendChild(deleteButton);
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.addEventListener("click", function () {
            const idProduto = row.cells[0].textContent;
            const produto = row.cells[1].textContent;
            const cor = row.cells[2].textContent;
            const tamanho = row.cells[3].textContent;
            const preco = row.cells[4].textContent;
            let inputProduto = document.getElementById("produto");
            inputProduto.value = String(produto);
            let inputCor = document.getElementById("cor");
            inputCor.value = String(cor);
            let inputTamanho = document.getElementById("tamanho");
            inputTamanho.value = String(tamanho);
            let inputPreco = document.getElementById("preco");
            inputPreco.value = String(preco);
            produtos = produtos.filter(function (produto) {
                return produto.id !== idProduto;
            });
            row.remove();
            localStorage.setItem("produtos", JSON.stringify(produtos));
        });
        row.insertCell(5).appendChild(editButton);
    });
}
load();
function save() {
    const produtoInput = document.getElementById("produto");
    const corInput = document.getElementById("cor");
    const tamanhoInput = document.getElementById("tamanho");
    const precoInput = document.getElementById("preco");
    const produto = {
        id: crypto.randomUUID(),
        nome: produtoInput.value,
        cor: corInput.value,
        tamanho: tamanhoInput.value,
        preco: precoInput.value
    };
    produtoInput.value = "";
    corInput.value = "0";
    tamanhoInput.value = "0";
    precoInput.value = "";
    produtos.push(produto);
    console.log(produtos);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    load();
}
