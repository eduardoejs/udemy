const pessoa = {
    nome: 'Vitor',
    idade: 4,
    peso: 18
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

// usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1990'
})

pessoa.dataNascimento = '04/06/2019'
console.log(pessoa.dataNascimento);

console.log(Object.keys(pessoa));

// Object.assign (ES2015)
const dest = { a:1 }
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj);

Object.freeze(obj)

obj.c = 123

console.log(obj);