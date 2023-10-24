Array.prototype.map2 = function(callback) {
    const novoArray = []
    
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Carderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado);