let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!isAtivo); // negação simples 
console.log(!!isAtivo); // dupla negacao se torna true ou false dependendo do contexto

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || ' '));
console.log(('' || null || 0 || 'será retornado esse valor')); // único valor verdadeiro encontrado pelo operador lógico 'Ou'
console.log(!!('' || null || 0 || ''));

let nome  = ''
console.log(nome || 'Desconhecido'); // definindo valor padrão caso a variável não conter dado
