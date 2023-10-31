const gerarNumerosEntre = (min, max, numerosProibidos) => {
    if (min > max) {
        [max, min] = [min, max] // por destructuring, inverte-se os valores 
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

const gerarMegaSena = async qtdeNumeros => {
    try {
        const numeros = []    
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros        
    } catch (error) {
        throw 'Que chato'
    }
}

const gerarLotofacil = async qtdeNumeros => {
    try {
        const numeros = []    
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 25, numeros))
        }
        return numeros        
    } catch (error) {
        throw 'Que chato'
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

gerarLotofacil(15)
    .then(console.log)
    .catch(console.log)