// Destructuring
const [l, e, ...tras] = 'Eduardo'
console.log(l, e, tras);

const [x, y] = [1, 2, 3]
console.log(x, y);

const [a, , b] = [1, 2, 3]
console.log(a, b); // ignora o elemento no indice 1

const {nome, idade} = { nome: 'Eduardo', idade:40 }
console.log(`${nome} ${idade}`);

const {nome: n, idade: i} = { nome: 'Eduardo', idade:40 } // renomeando as variáveis do destructuring
console.log(`${n} ${i}`);

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2,8));

const contextoLexico1 = () => console.log(this == module.exports); // dentro de arrow function o this aponta para exports
const contextoLexico2 = contextoLexico1.bind({}) // mesmo dando bind em um objeto vazio de contextoLexico1, o this aponta para exports
contextoLexico1()
contextoLexico2()

// Parametro default
function log(texto = 'Node') {
    console.log(texto);
}
log()
log(undefined)
log(null)
log('sou mais forte')

// Operado rest (agrupar) ou spread (espalhar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5));

// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)); // retorna um array com as chaves do objeto
console.log(Object.values(obj)); // retorna um array com os valores do objeto
console.log(Object.entries(obj)); // retorna um array de array (matriz de arrays) com os pares chave/valore do objeto

// Melhorias na Notação Literal de Objeto
const nome2 = 'Daiane'
const pessoa = {
    nome2, // não precisa reatribuir o valor da variavel do objeto com a variavel definida anteriormente
    ola() { // noa precisa declarar a função com function, posso omití-la (ex ola: function() {...})
        return 'Oi gente'
    }
}

console.log(pessoa.nome2, pessoa.ola());

// Class :: internamente será convertida para uma função
class Animal {}
class Cao extends Animal {
    latir() {
        return 'Au au!'
    }
}
console.log(new Cao().latir());
