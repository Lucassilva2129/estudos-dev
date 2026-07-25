const texto = document.querySelector('#texto')
const saida = document.querySelector('#saida')
const botao = document.querySelector('#botao')

botao.addEventListener('click', function() {
    saida.innerHTML = texto.value
    console.log(texto)
})

