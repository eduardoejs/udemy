class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome  = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    adicionarLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 4500)
const energia = new Lancamento('Energia Elétrica', -250)
const agua = new Lancamento('Água', -250)
const bico = new Lancamento('Bico', 1000)

const contas = new CicloFinanceiro(10, 2023)
contas.adicionarLancamentos(salario, energia, agua, bico)

console.log(contas.sumario());