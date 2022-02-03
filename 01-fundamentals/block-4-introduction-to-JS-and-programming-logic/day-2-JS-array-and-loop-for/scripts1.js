let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercise 1
for(let list of numbers) {
console.log(list);
}

//Exercise 2
let soma = 0;

for (let index = 0; index < numbers. length; index += 1) {
    soma += numbers[index];
}

console.log(soma);

//Exercise 3
let soma = 0;
for (i = 0; i < numbers.length; i+= 1) {
    soma += numbers[i];
}
let media = soma / numbers.length;
console.log(media);

//Exercise 4
let soma = 0;

for (i = 0; i < numbers.length; i+= 1) {
    soma += numbers[i];
}

let media = soma / numbers.length;

if (media > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor que 20');
}

//Exercise 5
var maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        var maior =  numbers[i];
    }
}

console.log(maior);

//Exercise 6
var impar = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        impar ++;
    }
}

console.log(impar);

//Exercise 7

var menor = numbers.sort()[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        var menor = numbers[i];
    }
}

console.log(menor);

//Exercise 8
var array = [];

for (i = 1; i < 26; i += 1) {
    array.push(i);
}
console.log(array);

//Exercise 9
var array = [];

for (i = 1; i < 26; i += 1) {
    array.push(i);

}

for (i = 0; i < array.length; i += 1) {
    console.log(array[i] / 2);
}