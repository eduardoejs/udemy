// middleware pattern (chain of responsability)
const step1 = (context, next) => {
    context.value1 = 'middleware 1'
    next()
}

const step2 = (context, next) => {
    context.value2 = 'middleware 2'
    next()
}

const step3 = context => context.value3 = 'middleware 3'

const exec = (context, ...middlewares) => {
    const runStep = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](context, () => runStep(indice + 1)) 
    }
    runStep(0)
}

const context = {}
exec(context, step1, step2, step3)
console.log(context);
