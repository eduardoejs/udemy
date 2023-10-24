const nums = [1,2,3,4,5]

// for com propósito
let resultado = nums.map(elemento => elemento * 2)
console.log(resultado);

const soma10 = elemento => elemento + 10
const tripo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado);