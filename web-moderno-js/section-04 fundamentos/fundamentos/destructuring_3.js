function rand( { min = 0, max = 1000 } ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}

// nas chamadas abaixo, não confundir com o operador destructuring, pois na verdade o que é 
// passado para a funcao rand é um objeto
console.log(rand(obj));
console.log(rand({min: 955}));
console.log(rand( {} )); // objeto vazio
console.log(rand()); // erro, pois não está sendo passado objeto para a funcao