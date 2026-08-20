const botao = document.querySelector('#btn1')
const formulario = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')

botao.addEventListener('click', function() {
    if(formulario.style.display === 'none') { // none oculta o formulário
        formulario.style.display = 'block' // block exibe o formulário
        botao.innerText = 'Fechar detalhes' // muda o texto do botão para "Fechar detalhes"
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)' // muda a cor de fundo do body para um tom de cinza escuro com opacidade
    }else {
        formulario.style.display = 'none'// oculta o formulário
        botao.innerText = 'Ver detalhes'
        document.body.style.backgroundColor = 'transparent' // muda a cor de fundo do body para transparente
    }
    
})