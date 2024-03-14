/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
  e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia
   o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno: Pedro Henrique de Oliveira Alves
*/

const teclado = require(`prompt-sync`)();

let macasCompradas : number = parseInt(teclado(`Digite quantas maças foi comprada: `))
let precoMaca: number = 0

if (macasCompradas < 12){
     precoMaca = 0.30;}
     else {
        precoMaca = 0.25
     }

     let total: number = 0
     total= macasCompradas * precoMaca
     console.log(`O valor total da compra é: ${total} `);