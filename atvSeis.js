/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever
 a nota correspondente, tal que 0 é a menor nota e 10 a maior,
  e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno: Pedro Henrique de Oliveira Alves
*/
var teclado = require("prompt-sync")();
var numeroUm = parseFloat(teclado("digite um numero: "));
var numeroDois = parseFloat(teclado("digite um numero: "));
var media = 0;
media = (numeroUm + numeroDois) / 2;
if (media >= 8.5 && media <= 10) {
    console.log("Nota \u00E9 A, media \u00E9 ".concat(media));
}
if (media >= 7 && media < 8.5) {
    console.log("Nota \u00E9 B, media \u00E9 ".concat(media));
}
if (media >= 5 && media < 7) {
    console.log("Nota \u00E9 C, media \u00E9 ".concat(media));
}
if (media >= 3 && media <= 5) {
    console.log("Nota \u00E9 D, media \u00E9 ".concat(media));
}
if (media < 3) {
    console.log("Nota \u00E9 E, media \u00E9 ".concat(media));
}
