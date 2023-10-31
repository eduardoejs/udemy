const gerarNumerosEntre = (min, max, tempo) => {
    if (min > max) {
        [max, min] = [min, max] // por destructuring, inverte-se os valores 
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)            
        }, tempo);
    })
}

const gerarNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

gerarNumeros().then(numeros => console.log(numeros))