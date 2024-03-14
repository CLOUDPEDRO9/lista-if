/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:
*/
var teclado = require('prompt-sync')();
var letra = teclado("Digite uma vogal: ");
if (letra == "A" || letra == "a" || letra == "e" || letra == "E" || letra == "I" || letra == "i" || letra == "O" || letra == "o" || letra == "U" || letra == "u") {
    console.log("A letra \u00E9 uma ".concat(letra, " vogal"));
}
else {
    console.log("A letra \u00E9 uma ".concat(letra, " consoante"));
}
