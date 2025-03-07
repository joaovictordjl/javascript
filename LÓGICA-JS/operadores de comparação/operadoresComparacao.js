/*
    1 . > maior que
    2 .>= maior ou igual 
    3 .< menor que
    4 .<= menor ou igual
    5 .== igual (somente valor)
    6 .=== (valor e tipo)  ESTE DEVE SER UTILIZADO.
    7 .!= diferente COMPARA DOIS VALORES PARA VER SE SÃO DIFERENTES
*/

let numero1 = 10;
let numero2 = 8;

console.log(numero1 > numero2);
console.log(numero1 >= numero2);
console.log(numero1 < numero2);
console.log(numero1 <= numero2);
console.log(numero1 === numero2);
console.log(numero1 != numero2);

//PORQUE NÃO USAR O == E SIM O ===
//PERCEBE-SE QUE A SAÍDA É TRUE PORQUÊ O == VERIFICA APENAS OS VALORES E NÃO O TIPO DA VARIÁVEL

let numero3 = 5;
let numero4 = '5';
console.log(numero3 == numero4);








