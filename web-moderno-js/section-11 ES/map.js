const tecologias = new Map()
tecologias.set('react', { framework: false })
tecologias.set('angular', { framework: true })

console.log(tecologias.react); // undefined, pois o acesso a chave não pode ser chamada diretamente
console.log(tecologias.get('react'));
console.log(tecologias.get('react').framework);

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));

console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas); // Map não aceitas chaves duplicadas, mas os valores sim