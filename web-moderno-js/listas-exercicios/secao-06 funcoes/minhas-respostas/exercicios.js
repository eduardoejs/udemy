console.group('Exercício 01')

const soma = (x, y) => x + y
const subtracao = (x, y) => x - y
const divisao = (x, y) => x / y
const multiplicacao = (x, y) => x * y

const operadores = (a, b) => {
    console.log(`Soma: ${soma(a,b)} Subtração: ${subtracao(a,b)} Divisão: ${divisao(a,b)} Multiplicação: ${multiplicacao(a,b)}`);
}

operadores(2,2)
console.groupEnd('Exercício 01')

console.group('Exercício 02')

const equilatero = (a,b,c) => a==b && b==c
const isoceles = (a,b,c) => a==b || b==c || a==c

const classificaTriangulo = (a,b,c) => {     
    if (equilatero(a,b,c)) {
        return 'Equilátero'
    } else if (isoceles(a,b,c)) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    } 
 }

console.log(classificaTriangulo(1,1,1), classificaTriangulo(1,3,3), classificaTriangulo(4,3,2));
console.groupEnd('Exercício 02')

console.group('Exercicio 03')
const potenciacao = (base, expoente) => base ** expoente
console.log(potenciacao(2,3));
console.groupEnd('Exercicio 03')

console.group('Exercicio 04')
const divisao2 = (dividendo, divisor) => {
    console.log(`Resultado: ${Math.floor(dividendo/divisor)} Resto: ${dividendo%divisor}`);
}
divisao2(11,4)
console.groupEnd('Exercicio 04')

console.group('Exercicio 05')
const formatarValor = valor => `R$ ${valor.toFixed(2).replace('.',',')}`
console.log(formatarValor(0.1 + 0.2));
console.groupEnd('Exercicio 05')

console.group('Exercicio 06')
const jurosSimples = (capital,juros,tempo) => capital + (capital*tempo*juros)
const jurosCompostos = (capital,juros,tempo) => capital*((1+juros)**tempo)
console.log(`Capital: R$ 1.000,00 Taxa de juros: 1% a.m. e Tempo: 12 meses 
    ==> Simples (R$ ${jurosSimples(1000, 0.01, 12).toFixed(2).replace('.', ',')}) 
    ==> Compostos (R$ ${jurosCompostos(1000, 0.01, 12).toFixed(2).replace('.', ',')})`);
console.groupEnd('Exercicio06')

console.group('Exercicio')
console.groupEnd('Exercicio')

console.group('Exercicio')
console.group('Exercicio')

console.groupEnd('Exercicio')
console.groupEnd('Exercicio')