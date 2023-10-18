const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3]);
console.log(valores[4]); // indice nao existe no array, o retorno é undefined

valores[4] = 10
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste')
console.log(valores);

console.log(valores.pop()); // remove o ultimo elemento do array

delete valores[0] // remove elemento do array de acordo com o índice passado

console.log(valores);

console.log(typeof valores);

