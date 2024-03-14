/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a
participação da pessoa no crime. Se a pessoa responder positivamente
a 2 questões ela deve ser classificada/exibida como "Suspeita",
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário,
ele será classificado como "Inocente".
 Aluno: Pedro Henrique de Oliveira Alves
*/

const teclado = require (`prompt-sync`)();

let telefonou : number = parseFloat(teclado(`Telefonou para a vítima? (1 para sim/ 0 para não) `));
let esteve : number = parseFloat(teclado(`Esteve no local do crime? (1 para sim/ 0 para não) `));
let mora : number = parseFloat(teclado(`Mora perto da vítima? (1 para sim/ 0 para não) `));
let devia : number = parseFloat(teclado(`Devia para a vítima? (1 para sim/ 0 para não) `));
let trabalhou : number = parseFloat(teclado(`Já trabalhou com a vítima? (1 para sim/ 0 para não) `));

let perguntasVerdadeiras: number = 0;


if(telefonou == 1) {
   perguntasVerdadeiras++;
}

if(esteve == 1) {
    perguntasVerdadeiras++;
 } 

 if(mora == 1) {
    perguntasVerdadeiras++;
 } 
 if(devia == 1) {
    perguntasVerdadeiras++;
 } 

 if(trabalhou == 1) {
    perguntasVerdadeiras++;
 } 
 
console.clear();



if (perguntasVerdadeiras == 2){

console.log(`Suspeita`);
}
else if(perguntasVerdadeiras >= 3 && perguntasVerdadeiras <= 4){
    console.log(`Cumplice`);

}
else if(perguntasVerdadeiras == 5){
    console.log(`Assassino`);
}
else{
    console.log(`Inocente`);
}