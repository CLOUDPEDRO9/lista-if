/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do
volume de uma lata, sabendo que PI é um valor constante de 3.14159,
 o programa deve pedir os valores de RAIO e ALTURA,
  utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Pedro Henrique de Oliveira Alves
*/
var teclado = require("prompt-sync")();
var volumeLata = 0;
var raio = parseFloat(teclado("Digite raio: "));
var altura = parseFloat(teclado("Digite a altura: "));
var pi = 3.14159;
volumeLata = pi * (raio * raio) * altura;
console.log("O volume da lata \u00E9 ".concat(volumeLata));
