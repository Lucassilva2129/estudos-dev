const botao1 = document.querySelector('#btn1')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const caixa = document.querySelector('#caixa')
const botao2 = document.querySelector('#btn2')
const resultado = document.querySelector('#resultado')
botao1.addEventListener('click', function(){
    if(caixa.style.display === 'none') {
        caixa.style.display = 'block'
    }else {
        caixa.style.display = 'none'
    }
})

botao2.addEventListener('click', function(){
    resultado.innerText = `Bem vindo ${nome.value}!`
})