const produto = {}

produto.nome = 'Teclado Ultra Mega'
produto.preco = 255.98
produto['desconto'] = 0.10
produto.valorVenda = produto.preco * (1-produto.desconto)

console.log(produto);

const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    desconto: 0.5,    
}

const valorVenda = produto => produto.preco * (1 - produto.desconto)

console.log(valorVenda(produto2));