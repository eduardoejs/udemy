const moduloA = require('../../moduloA')

console.log(moduloA.bemVindo);

const saudacao = require('saudacao')
console.log(saudacao.ola);

const moduloC = require('./pastaC')
console.log(moduloC.ola2);

// const http = require('http');
// const { log } = require('console');
// http.createServer((request, response) => {
//     response.write('Bom dia!')
//     response.end()
// }).listen(8080)