//LISTA/ COLEÇÃO DE COISAS

//CRIAR A LISTA
const familia = ['Gabrielle', 'João', 'Bela'];
console.log(familia);

//se quiser um elemento específico do array familia : 
console.log(familia[1]);

//a contagem dos elementos começa de 0 e vai subindo: 0, 1, 2...

// PARA ADICIONAR UM ELEMENTO AO FIM DOS OUTROS JA EXISTENTES NA LISTA:

familia.push('Daniela');
familia.push('Luciano');
familia.push('Miguel');

console.log(familia);

//ADICIONAR UM ELEMENTO ANTES DOS OUTROS JA EXISTENTES: Isso faz com que os outros mudem de índice ->>

familia.unshift('teste');
console.log(familia);
console.log(familia[0]);

//REMOVER O ULTIMO ELEMENTO ADICIONADO NA LISTA

familia.pop();
console.log(familia);

