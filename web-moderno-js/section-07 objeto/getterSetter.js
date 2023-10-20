const sequencia = {
    _valor: 1, // convenção para dizer que a variável será "privada", não significa de fato que será privada
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor
        }
     }
}

console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 900 // ignora e incrementa o valor definido acima
console.log(sequencia.valor, sequencia.valor);