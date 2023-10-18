const [a ,b, c, d] = [3, 5, 1, 15] // usando operador destructuring
const soma = a + b + c + d
const subtracao = d -b
const multiplicacao = b * a
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo);
console.log(soma, subtracao, multiplicacao, -divisao, modulo); // usando operador unário, tornando o resultado da divisão como um valor negativo