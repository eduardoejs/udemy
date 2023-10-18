let a = 7;
let b = 94;

// maneira 1 de realizar a troca 

// let temp = a
// a = b
// b = temp

// maneira 2 de realizar a troca
[a, b] = [b, a];

console.log(a);
console.log(b);