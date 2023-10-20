const pai = {nome: 'Eduardo', corCabelo: 'Castanho'}
const filho = Object.create(pai)
filho.nome = 'Vitor'

console.log(filho.corCabelo);

const filha = Object.create(pai, {
    nome: {
        value: 'Alice',
        writable: false,
        enumerable: true
    } 
})

console.log(filha.nome);
filha.nome = 'Ana' // nao consegue alterar o nome

console.log(`${filha.nome} tem cabelo ${filha.corCabelo}`);

console.log(Object.keys(filho));
console.log(Object.keys(filha));

for (let key in filha) {
    // console.log(key);
    filha.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}