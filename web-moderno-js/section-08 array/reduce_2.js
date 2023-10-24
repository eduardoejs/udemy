const alunos = [
    {nome: 'Edu', nota: 7.3, bolsista: false},
    {nome: 'Dai', nota: 10, bolsista: true},
    {nome: 'Vi', nota: 8.5, bolsista: false},
    {nome: 'Alice', nota: 8.5, bolsista: true},
    {nome: 'Anjo', nota: 10, bolsista: true},
    {nome: 'Cisco', nota: 1.0, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsistas?
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosSaoBolsistas));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista));