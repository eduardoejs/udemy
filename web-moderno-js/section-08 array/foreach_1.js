const aprovados = ['Edu', 'Dai', 'Vi', 'Alice']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})