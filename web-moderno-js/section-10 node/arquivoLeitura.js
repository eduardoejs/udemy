const fileSystem = require('fs') // modulo nativo do node

const caminho = __dirname + '/arquivo.json'

// lendo de forma síncrona
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// lendo de forma assíncrona (abordagem mais interessante!)
fileSystem.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`);
})

// ler arquivo .json diretamente sem o uso do fs. Desta forma, a leitura é de forma síncrona
const config = require('./arquivo.json')
console.log(config.db);

// lendo um doretório
fileSystem.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo do diretório:');
    console.log(arquivos);
})