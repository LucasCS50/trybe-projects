//Exercise 1 
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  console.log("Bem-vinda, " + info.personagem);

//Exercise 2

console.log(info);

//Exercise 3

for (let all in info) {
    console.log(all);
}

//Exercise 4

for (let all in info) {
    console.log(info[all]);
}

//Exercise 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Comics #178",
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim'
}

for (let all in info) {
    if (
        all === 'recorrente' &&
        info[all] === 'Sim' &&
        info2[all] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    }
    else {
        console.log(info[all] + ' e ' + info2[all]);
    }
}

//Exercise 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',  
      }
    ],
  };

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'")

//Exercise 7

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");


//PARTE II - FUNCTION
//Exercise 1

function verificaPalindrome(word) {
    for (let index in word) {
        if (word[index] != word[(word.length -1) - index]) {
            return false;
        }
    }
    return true
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

//Exercise 2


function indiceMaior(numero) {
    let indiceMaior = 0;
    for (let indice in numero) {
        if (numero[indice] > numero[indiceMaior]) {
            indiceMaior = indice;
        }
    }
    console.log(indiceMaior);
}

indiceMaior([2, 3, 6, 7, 10, 1]);

//Exercise 3

function indiceDoMenor(number) {
    let indiceDoMenor = 0;
    for (let indice in number) {
        if (number[indice] < number[indiceDoMenor]) {
            indiceDoMenor = indice;
        }
    }
    
    console.log(indiceDoMenor);
}

indiceDoMenor([2, 4, 6, 7, 10, 0, -3]);

//Exercise 4

function biggestWord(words) {
    let biggestWord = words[0]
    for (let index in words) {
        if (words[index].length > biggestWord.length) {
            biggestWord = words[index];
        }
    }
    console.log(biggestWord);
}

biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);


//Exercise 5

//Exercise 6

function somatorio (number) {
    let total = 0;
    for (let i = 1; i <= number; i += 1) {
        total += i;
    }

    console.log(total);
}

somatorio(5);

//Exercise 7

function end (word) {
    
}