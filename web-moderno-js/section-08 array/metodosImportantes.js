const pilotos = ['Vettel', 'Alonso', 'Senna', 'Massa']

pilotos.pop() // remove o último elemento do array
pilotos.push('Hamilton') // adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Raikkonen') // adiciona um elemento no início do array
console.log(pilotos);

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar
console.log(pilotos);
pilotos.splice(4, 1) // remover
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // slice gera um novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // nao inclui o índice 4, vai até ele, mas não inclui
console.log(algunsPilotos2);