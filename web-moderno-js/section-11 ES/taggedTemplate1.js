// Tagged Template: é a capacidade de processar a string (template string) através (dentro) de uma função
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string'
}

const aluno = 'Vitor'
const situacao = 'Aprovado'
console.log(`${aluno} está ${situacao}`);
console.log(tag `${aluno} está ${situacao}.`);