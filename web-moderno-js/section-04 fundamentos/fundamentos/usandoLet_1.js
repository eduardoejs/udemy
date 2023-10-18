/**
 * Ao declarar uma variável com Var, ela passa a ter escopo GLOBAL e de FUNÇÃO
 * Ao declarar uma variável com Let, ela passa a ter escopo GLOBAL, de FUNÇÃO e de BLOCO
 */

var numero = 1

{
    let numero = 2
    console.log('dentro do bloco de codigo = ', numero);
}

console.log('fora do bloco de codigo = ', numero);
