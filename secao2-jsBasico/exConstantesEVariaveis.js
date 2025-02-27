/**
 * João Victor tem 21 anos, pesa 70kg
 * tem 1.78 de altura e seu IMC é de xxxxx
 */

const nome = 'João';
const sobreNome = ' Victor';
const idade = 22;
const peso = 70;
const altura = 1.78;
let imc = peso / (altura * altura);
let anoDeNascimento = 2025 - idade;

console.log(`${nome} tem ${idade} anos e pesa ${peso}kg.`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome}, nasceu em ${anoDeNascimento}`);

