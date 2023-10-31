const funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            con.log()
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (exception) {
            reject(exception)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(erro))
    .then(() => console.log('fim'))