let nomeCompleto = "Gabriel Paterra";
const pi = 3.14;
let idade = 19;

console.log(nomeCompleto);

//Tipos
let frase:string = 'Olá'
let peso:number = 97.5;
let estaAprovado:boolean = true;

let texto = `${frase} ${nomeCompleto}. Voce tem ${idade} anos e pesa ${peso} kg. `;

console.log(texto);

//Arrays
let texto2: String[] = [];
let texto3: String[] = ["Olá", "Mundo"];

console.log("Array texto 2")
texto2.push("Teste"); 
texto2.push("Outro Item")
console.log(`Itens do texto 2: ${texto2.length}`);
texto2.forEach(item => {
    console.log(item);
})

let numeros:number[] = [1,2,3,15];
numeros.push(50);

for (let i = 0; i< numeros.length; i++) {
    console.log(numeros[i]);
}

let listarPessoas = [];
let pessoa:{nome:String, idade:Number} = {
    nome: "Gabriel",
    idade: 19
}
listarPessoas.push(pessoa);

let outraPessoa: {nome:String, idade:Number} = {
    nome: "Maria",
    idade: 25
}
listarPessoas.push(outraPessoa);

listarPessoas.forEach(pessoa => {
    console.log(pessoa.nome);
})