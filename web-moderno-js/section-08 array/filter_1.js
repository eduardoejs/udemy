const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 2.49, fragil: false},
]

console.log(produtos.filter(produto => produto.fragil));
console.log(produtos.filter(produto => !produto.fragil));
console.log(produtos.filter(produto => produto.preco >= 2500));

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado);