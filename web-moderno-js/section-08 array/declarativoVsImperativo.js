const alunos = [
    { nome: 'Vitor', nota: 7.5 },
    { nome: 'Alice', nota: 7.6 },
]

// Imperativa
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length);

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, notaAtual) => total + notaAtual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);