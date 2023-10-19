let comparaComThis = function(param) {
    console.log(this === param);
}
comparaComThis(global) // global = Node, window = browser
comparaComThis(this)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // aqui não aponta para objeto pois this foi declarado em arrow function
comparaComThisArrow(module.exports) // this dentro da arrow function