const escola = [
    { 
        nome: 'Turma M1', 
        alunos: [
            {
                nome: 'Vitor',
                nota: 9.5
            },
            {
                nome: 'Alice',
                nota: 9.1
            },            
        ] 
    },
    { 
        nome: 'Turma M2', 
        alunos: [
            {
                nome: 'Cisco',
                nota: 0.5
            },
            {
                nome: 'Mark',
                nota: 8.5
            },            
        ] 
    },
]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1);

Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}


console.group('flatMap')
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);
console.groupEnd('flatMap')