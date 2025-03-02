//O OBJETO TEM VÁRIAS COISAS DE MATEMÁTICA

//arredondar um valor para baixo, retirando as casas após a vírgula:

let numero1 = 10.5678;
let numero2 = Math.floor(numero1);
console.log(numero2);

//arredondar para cima: 

let numero3 = 10.56789;
let numero4 = Math.ceil(numero3);
console.log(numero4);

//arredondar para o número mais próximo (ROUND):

let numero5 = 10.489;
let numero6 = Math.round(numero5);
console.log(numero6);

//dizer qual o maior número de uma sequencia (max):
console.log(Math.max(1,2,3,4,10,50,80,1500,2400));

//o menor (min)
console.log(Math.min(1,3,5,10,500,2500,1890));

//gerar número aleatório arredondado entre um número(0) e outro (100)
const numeroAleatorio = Math.round(Math.random() * (0 - 100) + 100);
console.log(numeroAleatorio);

//numero PI
console.log(Math.PI);

//raiz quadrada
let numeroRaiz = 25;
console.log(numeroRaiz ** 0.5);