// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'geracoes' // não faça isso!

const avo = {attr1: 'Avo'}
const pai = {__proto__: avo, attr2: 'Pai'}
const filho = {__proto__: pai, attr3: 'Filho'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

//

const carro = {
    vAtual: 0,
    vMax: 200,
    acelerar(delta) {
        if (this.vAtual + delta <= this.vMax) {
            this.vAtual += delta
        } else {
            this.vAtual = this.vMax
        }
    },
    status() {
        return `${this.vAtual} Km/h de ${this.vMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    vMax: 340 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()} ` 
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100)
console.log(volvo.status());

ferrari.acelerar(300)
console.log(ferrari.status());
