let primeiraLetra = 'A';
let segundaLetra = 'B';
let terceiraLetra = 'C';
let primeiraLetraTemporaria = primeiraLetra;

//o resultado precisa sair dessa forma : B C A

primeiraLetra = segundaLetra;
segundaLetra = terceiraLetra;
terceiraLetra = primeiraLetraTemporaria;


console.log(primeiraLetra, segundaLetra, terceiraLetra);