// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);

delete produto.preco
delete produto['marca do produto']

console.log(produto);

const carro = {
    modelo: 'X6',
    fabricante: 'BMW',
    valor: 500000.00,
    proprietario: {
        nome: 'Eduardo',
        idade: 40,
        endereco: {
            logradouro: 'Rua Antonio Freitas',
            complemento: 'Verana',
            numero: 14
        }
    },
    condutores: [
        { nome: 'Daiane', idade: 37 },
        { nome: 'Eduardo', idade: 40 }
    ],
    calcularValorSeguro: function() {
        // ...
    }
}

console.log(carro);

carro.proprietario.endereco.numero = 144
carro['proprietario']['endereco']['complemento'] = 'Condomínio Verana Parque Alvorada'

console.log(carro);

delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro);

console.log(carro.condutores);