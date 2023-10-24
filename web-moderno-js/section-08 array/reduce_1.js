const alunos = [
    {nome: 'Edu', nota: 7.3, bolsista: false},
    {nome: 'Dai', nota: 10, bolsista: true},
    {nome: 'Vi', nota: 8.5, bolsista: false},
    {nome: 'Alice', nota: 8.5, bolsista: true},
    {nome: 'Anjo', nota: 10, bolsista: true},
    {nome: 'Cisco', nota: 1.0, bolsista: false},
]

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual);
    return acumulador + atual
}, 0)

console.log(resultado);