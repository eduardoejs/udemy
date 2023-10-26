const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo);

if (anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // replace remove o \n quando o usuário aperta <enter>, pois o <enter> envia \n por padrao
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}