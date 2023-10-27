// forOf atua sobre valor e nao sobre indices
for(let letra of 'Cod3r') {
    console.log(letra);
}

// forIn atua sobre indices e não sobre valor
const assuntosEcma = ['Map', 'Set', 'Promise']
for(let i in assuntosEcma) {
    console.log(i);
}

for(let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])
for(let assunto of assuntosMap) {
    console.log(assunto);
}

for(let chave of assuntosMap.keys()) {
    console.log(chave);
}

for(let valor of assuntosMap.values()) {
    console.log(valor);
}

for(let [chave, valor] of assuntosMap.entries()) { // usando o destructuring
    console.log(chave, valor);
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra);
}