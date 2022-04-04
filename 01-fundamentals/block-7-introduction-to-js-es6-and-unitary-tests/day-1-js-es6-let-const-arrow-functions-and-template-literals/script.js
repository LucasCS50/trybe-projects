/*  let  // 
const  // 

`${nameConst}` // template literals 

const name = (param1, param2) => param1 + param2;  // arrow function
 
const expression = (1 + 1 === 2) ? `true` : `false`;  // ternary operator 

const check = (age) => (age >= 18 ? `Sim` : `Nao`); */

//Exercise 1 

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

//Exercise 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sort = array => {
   const numbers = array.sort((a, b) => a - b); // (function(a, b){return a-b})
   return numbers;
}

const sorted = numbers();
console.log(`Os números ${sorted} se encontram ordenados de forma crescente !`);


//Exercise 3

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
