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

const teclado = require (`prompt-sync`)();

let numeroUm : number = parseFloat(teclado(`digite um numero: `));
let numeroDois : number = parseFloat(teclado(`digite um numero: `));
let media : number = 0;
media = (numeroUm + numeroDois) /2;

if(media >= 8.5 && media <= 10){

    console.log(`Nota é A, media é ${media}`);
}


if(media >= 7 && media < 8.5){

    console.log(`Nota é B, media é ${media}`);
}


if(media >= 5 && media < 7){

    console.log(`Nota é C, media é ${media}`);
}


if(media >= 3 && media <= 5){

    console.log(`Nota é D, media é ${media}`);
}


if(media < 3){

    console.log(`Nota é E, media é ${media}`);
}