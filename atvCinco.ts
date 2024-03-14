/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa
informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel}
e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel}
e ${variavel} são iguais`.
Nome: Pedro Henrique de Oliveira Alves
*/

const teclado = require (`prompt-sync`)();

let numeroUm : number = parseFloat(teclado(`digite um numero: `));
let numeroDois : number =parseFloat(teclado(`digite um numero: `));

if(numeroUm > numeroDois){

console.log(`O número maior é ${numeroUm} e o número menor é ${numeroDois}`);
}
else if( numeroUm < numeroDois){

    console.log(`O número maior é ${numeroDois} e o número menor é ${numeroUm}`);
}

else{

    console.log(`Os números ${numeroUm} e ${numeroDois} são iguais`);
}