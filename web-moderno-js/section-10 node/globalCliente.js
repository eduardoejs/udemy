require('./global')

console.log(MeuApp.saudacao());

MeuApp.nome = 'Eita fui modificado' // para tornar imutável, poderia utilizar Object.freeze no retorno do objeto no arquivo .global.js
console.log(MeuApp.nome);