const pessoa = {nome:'Jose'}
pessoa.nome = 'Joao'
console.log(pessoa);

// pessoa = {nome:'Pedro'} // erro

Object.freeze(pessoa)

pessoa.nome = 'ALice'
delete pessoa.nome
console.log(pessoa);
