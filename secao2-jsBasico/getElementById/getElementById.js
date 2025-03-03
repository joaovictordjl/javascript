let numero = Number(prompt(`Digite um número: `));

let numeroEscolhido = document.getElementById('numero-escolhido'); //pega um elemento ID do HTML
let texto = document.getElementById('texto');


//para o numeroEscolhido receber o numero do prompt
numeroEscolhido.innerHTML= numero; 
texto.innerHTML += `<p> A raiz quadrada do seu número é : ${numero ** 0.5} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro? : ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> ${numero} é NaN : ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}  </p>`;
texto.innerHTML += `<p> Arredondando para cima : ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;



 