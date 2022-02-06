/* //Exercise 1
var fatorial = 10;

for (let i = 9; i >= 1; i -= 1) {
     fatorial = fatorial * i; 
}

console.log(fatorial);

//Exercise 2
let word = "tryber";
let reverse = " ";

for (let i = 0; i <word.length; i += 1) {
    reverse += word[word.length - 1 - i];
}
console.log(reverse);


//Exercise 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
var maior = array.sort()[4];
var menor = array.sort()[0];

for (let i = 0; i < array.length; i += 1) {
    if (menor.length > array[i].length) {
        menor = array[i];
    }
}

for (let b = 0; b < array.length; b += 1) {
    if (maior.length < array[b].length) {
        maior = array[b];
    }
}
console.log(menor + maior); 
 */
//Exercise 4
/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

for (let num = 2; num <= 50; num += 1) {
    let primo = true;
        
    for (let div = 2; div < num; div += 1) {
        if (num % div === 0) {
            primo = false
        }
    }

    if (primo) {
       var maiorPrimo = num;
} 
}

console.log(maiorPrimo);
