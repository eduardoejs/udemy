const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(3000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

const executar = async () => {
    
    let valor = await retornarValor()

    await esperarPor()
    console.log(`Executar Async/Await ${valor}...`);
    await esperarPor()
    console.log(`Executar Async/Await ${valor + 1}...`);
    await esperarPor()
    console.log(`Executar Async/Await ${valor + 2}...`);

    return valor + 3
}

const executarDeVerdade = async () => {
    const resultado = await executar()
    console.log(resultado);
}

executarDeVerdade()