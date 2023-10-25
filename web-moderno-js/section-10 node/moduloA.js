// São exportados como propriedade/atributo do objeto

// Abaixo os atributos serão adicionados ao objeto, quando da chamada

console.log(this); // Nesse momento é retornado um objeto vazio que posteriormente será adicionado os atributos abaixo

this.ola = 'Fala galera' // exporta a propriedade

exports.bemVindo = 'Bem vindo ao Node!' //exporta a propriedade

module.exports.ateLogo = 'Até o próximo exemplo' // exporta a propriedade