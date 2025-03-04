//FUNÇÃO SEM RETORNO

function saudacao(nome, idade) {
    console.log(`Boa noite, me chamo ${nome} e tenho ${idade} anos de idade`);
}
saudacao('João', 22);
saudacao('Gabrielle', 18);

//FUNÇÃO COM RETORNO O NOME DO PARAMETRO NAO PODE SER O MESMO DA FUNÇÃO

function saudacao2(nome2) {
    return `Boa noite, me chamo ${nome2}`
}
const nome2 = saudacao2('Melissa');
console.log(nome2);

//FUNÇÃO PARA SOMAR

function somar(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(somar(50, 2));

//FUNÇAO MULTIPLICAR

function multiplicar(x, y) {
    const resultadoMultiplicação = x * y;
    return resultadoMultiplicação;
}
console.log(multiplicar(50, 2));

//FUNÇAO DIVIDIR 

function dividir(x, y) {
    const resultadoDaDivisão = x / y;
    return resultadoDaDivisão;
}

console.log(dividir(50, 2));
console.log(somar(10, 5));
