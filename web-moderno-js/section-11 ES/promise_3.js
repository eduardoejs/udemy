const gerarNumerosEntre = (min, max) => {
    if (min > max) {
        [max, min] = [min, max] // por destructuring, inverte-se os valores 
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => `O número gerado foi ${num}`)
    .then(console.log)