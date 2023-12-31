const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (request, response) => {
    console.log(request.body);
    // console.log(request.query); // query: quando os dados são passados por GET
    response.send(`<h1>Parabéns Novo Usuário!</h1>${request.body.nome}`)
})

app.post('/usuarios/:id', (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    response.send(`<h1>Parabéns Usuário alterado!</h1>${request.body.nome}`)
})

app.listen(5501)