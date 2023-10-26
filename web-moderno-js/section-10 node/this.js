console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports); // fora de uma função this aponta para module exports

function logThis() {
    console.log('Dento de uma função do módulo...');
    console.log(this === exports); // dentro de uma função o this não aponta para module exports
    console.log(this === module.exports); // o mesmo ocorre aqui, pois exports e module.exports são o mesmo
    console.log(this === global); // dentro de uma função, this aponta para global e fora aponta para module.exports

    this.perigo = 'Fazendo isso, dentro da função, você está colocando dentro do escopo global'
}

this.perigo = 'Aqui já está exportando para module.exports'

logThis()

// this em arrow function
// Em arrow function o this não aponta para objeto global e sim para module exports 
const arrowFunction = () => {
    console.log('This não aponta para o global ->', this === global);
    console.log('This aponta para o exports ->', this === exports);
    console.log('This aponta para o module.exports (que é basicamente o mesmo que exports) ->', this === module.exports);
    console.log('O this nesta função (arrow function) NÃO É O GLOBAL ->', this === global);
    console.log('O this nesta função (arrow function) É O MODULE.EXPORTS ->', this === module.exports);
}
arrowFunction()

