/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa
informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel}
e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel}
e ${variavel} são iguais`.
Nome: Pedro Henrique de Oliveira Alves
*/
var teclado = require("prompt-sync")();
var numeroUm = parseFloat(teclado("digite um numero: "));
var numeroDois = parseFloat(teclado("digite um numero: "));
if (numeroUm > numeroDois) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(numeroUm, " e o n\u00FAmero menor \u00E9 ").concat(numeroDois));
}
else if (numeroUm < numeroDois) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(numeroDois, " e o n\u00FAmero menor \u00E9 ").concat(numeroUm));
}
else {
    console.log("Os n\u00FAmeros ".concat(numeroUm, " e ").concat(numeroDois, " s\u00E3o iguais"));
}
