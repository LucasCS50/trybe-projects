//Exercise 1
 let soma = 0;

for (let i = 1; i <= 50; i += 1) {
        soma += i;
}
console.log(soma);

//Exercise 2
var numbers = 0;
for (let i = 2; i <= 150; i += 1) {
    if (i % 3 === 0) {
        numbers = numbers + 1;
    }
}

if (numbers == 50) {
    console.log("Mensagem secreta");
}
else {
    console.log(numbers);
}

//Exercise 3
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Tie" ou "Player 2 won". 
let player1 = "Rock";
let player2 = "Paper";

if (player1 == "Rock" && player2 == "Paper") {
    console.log("Player 2 won");
}
else if (player1 == "Rock")

//Exercise 4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
let age = 18;
console.log(age <= 18? "A pessoa e maior de idade" : "F");

// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let carolzita = 25;
let murilo = 23;
let baeta = 27;

if (carolzita < murilo && carolzita < baeta) { 
    console.log("Carolzita e a mais nova")
}
else if (murilo < baeta) {
    console.log("murilo e a mais nova");
}
else {
    console.log("baeta e a mais nova")
}