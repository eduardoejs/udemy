/*
    quando se declara uma variável, a mesma, está imediatamente disponível 
    para ser chamada/utilizada/consumida na sequência (linha seguinte)
*/
let variavel = 1
console.log(variavel);

/* 
    Quando se tem uma declaração de Promise, você terá uma promessa de algo 
    que será executado no futuro e algo que será devolvido no futuro 
    (terá o retorno de um dado no futuro)

    Promise recebe uma function como parêmetro, e o parâmetro dessa 
    function será outra function que será executada para cumprir a promessa
 */
let promessa = new Promise(function(cumprirPromessa) {
    // cumprirPromessa(3) // retorna apenas um valor, se houver mais de um, será ignorado/desconsiderado na promessa
    
    // para devolver mais de um valor, deverá retornar como um objeto, array de valores
    cumprirPromessa({
        x: 3,
        y: 2
    })
})

/* 
    para acessar o valor da promessa, que foi devolvido/cumprido no futuro, 
    invoca-se o método "then", passando uma function, que por sua vez, recebe 
    um parâmetro que é o valor devolvido pela promessa.
 */
promessa.then(function(valor) {
    console.log(valor);
    console.log(valor.x);
})

// quando se fala em function, pode-se utiliar o conceito de arrow function
// promessa.then(valor => console.log(valor))

// em promise, pode-se utilizar o encadeamento de then, para outros processamentos
promessa
    .then(atributoXObj => atributoXObj.x) // aqui recebo o objeto completo, e pego apenas o atributo x
    .then(attributoX => console.log(`Atributo x: ${attributoX}`)) // aqui tenho o resultado da chamada then acima


// **********************************************

let promessa2 = new Promise(function(resolve) {    
    // para devolver mais de um valor, deverá retornar como um objeto, array de valores
    resolve(['Eduardo', 'Daiane', 'Vitor', 'Alice'])
})

promessa2    
    .then(elemento1 => elemento1[0])
    .then(primeiraLetra => primeiraLetra[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))


const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()    
promessa2    
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log) // como o retorno é de apenas um valor, se chamar a 
                       // referência de console.log, ele irá imprimir o valor do retorno acima
