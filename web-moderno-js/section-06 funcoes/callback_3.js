// demonstrando callback para ser executado no browser

document.getElementsByTagName('body')[0].onclick = function(event) {
    console.log(`O evento ocorreu ${event}`);
}