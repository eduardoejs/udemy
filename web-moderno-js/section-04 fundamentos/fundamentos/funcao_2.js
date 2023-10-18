// armazenar uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)

// armazenar uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(1, 2));

// retorno implícito de arrow function 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 1));

const print = a => console.log(a);
print('oi')