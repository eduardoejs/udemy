// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Outro',
    preco: 1.99,
    tag: 'promoção'
}) 

console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto);

// Object.seal
const pessoa = {nome: 'Vitor', idade: 4}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 5
console.log(pessoa);

// Object.freeze = selado + valores constantes
