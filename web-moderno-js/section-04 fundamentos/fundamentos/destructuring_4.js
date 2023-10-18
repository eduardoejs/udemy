function rand( [ min = 0, max = 1000 ] ) {
    
    if (min > max) [min, max] = [max, min]
    
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const array = [50, 40]
    
// nas chamadas abaixo, não confundir com o operador destructuring, pois na verdade o que é 
// passado para a funcao rand é um array
console.log(rand(array));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([])); // array vazio
console.log(rand()); // erro, pois não está sendo passado um array para a funcao