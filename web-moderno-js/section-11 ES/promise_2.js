// callback hell
// setTimeout(() => {
//     console.log('Executanto callback...');
    
//     setTimeout(() => {
//         console.log('Executanto callback...');        

//         setTimeout(() => {
//             console.log('Executando callback...');
//         }, 2000);
//     }, 2000);
// }, 2000);

// refatorando para Promise
const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promessa...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
