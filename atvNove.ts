/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e
 possuir mais de 60Kg. Faça um aplicativo que pergunte a
  idade de uma pessoa e seu peso e diga se ela pode doar 
  sangue ou não, caso não diga o(s) motivo(s).
Nome: Pedro Henrique de Oliveira Alves
*/


const teclado = require (`prompt-sync`)();

let idade : number = parseFloat(teclado(`digite sua idade: `));
let peso : number =parseFloat(teclado(`digite seu peso: `));

if (idade >= 18 && idade <= 67){

console.log(`Com ${idade} anos você pode doar sangue` );
}
else {

    console.log(`Você não pode doar sangue pois não tem a idade adequada`); 
}


if (peso >= 60){

    console.log(`Com ${peso}Kg você pode doar sangue`);
    }
    else {
    
        console.log(`Você não pode doar sangue pois não tem o peso adequado`); 
    }