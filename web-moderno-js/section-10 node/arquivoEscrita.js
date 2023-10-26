const fs = require('fs')

const produto = {
    nome: 'Caneta',
    preco: 3.99,
    desconto: 0.0
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo!');
})