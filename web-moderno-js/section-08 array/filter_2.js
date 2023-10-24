Array.prototype.filter2 = function(callback) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 2.49, fragil: false},
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter2(caro).filter2(fragil)
console.log(resultado);