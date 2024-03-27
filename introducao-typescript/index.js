"use strict";
let nomeCompleto = "Gabriel Paterra";
const pi = 3.14;
let idade = 19;
console.log(nomeCompleto);
let frase = 'Olá';
let peso = 97.5;
let estaAprovado = true;
let texto = `${frase} ${nomeCompleto}. Voce tem ${idade} anos e pesa ${peso} kg. `;
console.log(texto);
let texto2 = [];
let texto3 = ["Olá", "Mundo"];
console.log("Array texto 2");
texto2.push("Teste");
texto2.push("Outro Item");
console.log(`Itens do texto 2: ${texto2.length}`);
texto2.forEach(item => {
    console.log(item);
});
let numeros = [1, 2, 3, 15];
numeros.push(50);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
let listarPessoas = [];
let pessoa = {
    nome: "Gabriel",
    idade: 19
};
listarPessoas.push(pessoa);
let outraPessoa = {
    nome: "Maria",
    idade: 25
};
listarPessoas.push(outraPessoa);
listarPessoas.forEach(pessoa => {
    console.log(pessoa.nome);
});
