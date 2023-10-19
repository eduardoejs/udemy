// Factory dinamico
function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('caneta', 4.5));
console.log(criarProduto('lapis', 1.5));
console.log(criarProduto('estojo', 1.5, 0.25));