const numero = document.querySelector('#numero')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')



botao.addEventListener ('click', function(){
    if ( numero.value === '') {
    resultado.innerText = 'Digite um número!'
    return
}

if (numero.value % 2 === 0) {
    resultado.innerText = 'Número par!'
}else {
    resultado.innerText = 'Número ímpar!'
}

})