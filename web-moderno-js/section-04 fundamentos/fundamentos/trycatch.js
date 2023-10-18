function tratarErroELancar(erro) {
    // throw new Error('Ops... algo deu errado!')
    throw 10
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Eduardo' }

imprimirNomeGritado(obj)