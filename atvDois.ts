/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y,
 e que y passe a ter o valor de x.
Nome Aluno: Pedro Henrique de Oliveira Alves
*/

const teclado = require('prompt-sync')();

let x: number = parseFloat(teclado(`Digite uma Variavel: `));
let y: number = parseFloat(teclado(`Digite uma variavel: `));
let z: number = 0

console.log(`O valor de X é ${x}, e o valor de Y é ${y}`);

z = x;
x = y;
y = z; 

console.log(`O valor de X é ${x}, e o valor de Y é ${y}`);

