console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

// outros operadores relacionais, > < >= <=

const d1 = new Date(0)
const d2 = new Date(0)

// como será avaliado o endereco de referencia de memória, a comparação será falsa para ambos os resultados
console.log('05)', d1 == d2);
console.log('06)', d1 === d2);

console.log('07)', d1.getTime() === d2.getTime());
console.log('08)', d1.getTime() == d2.getTime());

console.log('09)', undefined == null);
console.log('10)', undefined === null);