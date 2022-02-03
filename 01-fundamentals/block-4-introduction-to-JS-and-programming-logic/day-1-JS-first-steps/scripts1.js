// Exercise 1
const a = 9;
const b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
 
//Exercise 2
if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}

//Exercise 3
 const c = 15;

if (a > b && a > c) {
    console.log(a);
}
else if (a < b && b > c) {
    console.log(b);
}
else {
    console.log(c);
}

//Exercise 4
if (a >= 1) {
    console.log("positive");
}
else if (a <= -1) {
    console.log("negative");
}
else {
    console.log("zero")
}

//Exercise 5
const x = 80;
const y = 60; 
const z = 40;
const soma = x + y + z;

if (soma == 180 && x, y, z > 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Exercise 6
let piece = "Rook"

switch (piece.toLowerCase()) {
    case "pawn":
        console.log("vertically");
        break;

    case "bishop":
        console.log("diagonally");
        break;

    case "knight":
        console.log("L shape");
        break;

    case "rook":
        console.log("horizontally or vertically");
        break;

    case "queen":
        console.log("diagonnaly, horizontally or verically");
        break;

    case "king":
        console.log("any direction");
        break;
    
    default:
        console.log("insert a valid piece name");
        break;
}

//Exercise 7
let grade = 100;

if (grade > 100 || grade < 0) {
    console.log("error, insert a valid grade");
}
else if (grade >= 90) {
    console.log("A");
}
else if (grade >= 80) {
    console.log("B")
}
else if (grade >= 70) {
    console.log("C")
}
else if (grade >= 60) {
    console.log("D")
}
else if (grade >= 50) {
    console.log("E")
}
else {
    console.log("F")
}

//Exercise 8

//Exercise 9


//Exercise 10

//Exercise 11