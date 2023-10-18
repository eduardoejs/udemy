
/**
 * Ao declarar uma variável com Var, ela passa a ter escopo GLOBAL e de FUNÇÃO
 * Ao declarar uma variável com Let, ela passa a ter escopo GLOBAL, de FUNÇÃO e de BLOCO
 */

{
    {
        {
            { 
                var sera = 'Será???' // escopo global
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123
    console.log(local); // escopo de função
}
teste()
console.log(local); // não é acessada fora do escopo da função
