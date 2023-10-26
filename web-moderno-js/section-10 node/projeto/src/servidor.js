const porta = 3003
const express = require('express')
const app  = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

const bancoDeDados = require('./bancoDados')

// app.get('/produtos', (request, response, next) => {
//     console.log('Middleware 1');
//     next()
// })

// app.get('/produtos', (request, response, next) => {
//     response.send( { nome: 'Notebook', preco: 1234.45 } ) // converte o objeto para JSON
// })

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco,
    })
    response.send(produto) // converte para JSON
})

app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco,
    })
    response.send(produto) // converte para JSON
})

app.delete('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)
    response.send(produto) // converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
})