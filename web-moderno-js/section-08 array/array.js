console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Edu', 'Vi', 'Alice', 'Dai', 'Anjo')
console.log(aprovados);

aprovados = ['A', 'B', 'C']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'D'
aprovados.push('E')

console.log(aprovados.length);

aprovados[9] = 'Z'

console.log(aprovados);
console.log(aprovados[8] === undefined);

aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = [1,2,3,4]
aprovados.splice(1,2)
console.log(aprovados);

aprovados = [1,2,3,4]
aprovados.splice(2, 0, 'El1', 'El2')
console.log(aprovados);