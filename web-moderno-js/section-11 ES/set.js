// não aceita repetição e não é indexada (não tem índice associado ao Set)
const times = new Set()
times.add('São Paulo')
times.add('Internacional')
times.add('Palmeiras').add('Santos').add('Vasco')
times.add('São Paulo') // ignora, pois já foi adicionado anteriormente

console.log(times);
console.log(times.size);

console.log(times.has('Vasco'));
console.log(times.has('vasco'));

times.delete('Vasco')
console.log(times.has('Vasco'));

const nomes = ['Eduardo', 'Daiane', 'Vitor', 'Alice', 'Alice']
const nomesSet = new Set(nomes)
console.log(nomesSet);