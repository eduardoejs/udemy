// operador ...rest(juntar) / spread(espalhar)

// usar rest como parametro de função
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5));

// usar spread com objeto
const funcionario = { nome:'Fulano', salario: 2000 }
const clone = { ativo: true, ...funcionario } // espalha os atributos do objeto funcionario dentro do objeto clone que inclusive pode possuir outros atributos próprios
console.log(clone);

// usar spread com arrays
const grupoA = ['Fulano', 'Beltrana', 'Ciclana']
const grupoFinal = ['Alfa', 'Omega', 'Delta', ...grupoA]
console.log(grupoFinal);