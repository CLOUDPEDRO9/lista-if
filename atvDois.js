/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y,
 e que y passe a ter o valor de x.
Nome Aluno: Pedro Henrique de Oliveira Alves
*/
var teclado = require('prompt-sync')();
var x = parseFloat(teclado("Digite uma Variavel: "));
var y = parseFloat(teclado("Digite uma variavel: "));
var z = 0;
console.log("O valor de X \u00E9 ".concat(x, ", e o valor de Y \u00E9 ").concat(y));
z = x;
x = y;
y = z;
console.log("O valor de X \u00E9 ".concat(x, ", e o valor de Y \u00E9 ").concat(y));
