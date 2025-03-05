











//FUNÇÃO QUE RETORNA UM OBJETO  (FACTORY FUNCTION)    
function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criarPessoa('João', 'Victor', 22);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);