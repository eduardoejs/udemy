const quaseArray = { 0: 'Dai', 1: 'Vitor', 2: 'Anjo', 3: 'Alice'}
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Edu', 'Dai', 'Vi', 'Alice', 'Anjo']
console.log(quaseArray.toString(), meuArray);