// usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// funções construtoras
function obj3(nome, preco, desc) {
    this.nome = nome // atributo público, os demais parâmetros estão privados
    this.getPrecoComDesconto = () => { return preco * (1 - desc) }
}
const p1 = new obj3('Caneta', 7.99, 0.15)
const p2 = new obj3('Notebook', 7999, 0.1)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Eduardo', 4000, 0)
const f2 = criarFuncionario('Jose', 4000, 5)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2));

// Object.create
const filha = Object.create(null)
filha.nome = 'Alice'
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info);