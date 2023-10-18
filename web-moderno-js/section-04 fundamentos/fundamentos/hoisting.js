console.log('a = ', a);
var a = 2
console.log('a = ', a);

console.log();

// mais sobre hoisting: https://www.youtube.com/watch?v=A9RwfhYjabw

var x = 2
console.log(x) // 2

function qualquer() {
    
    // var x = undefined :: houve o hoisting, declarando a var como undefined

    console.log(x); // undefined

    // x = 3 :: depois do hoisting houve a atribuicao do valor a variavel

    var x = 3

    console.log(x); // 3
}



qualquer()