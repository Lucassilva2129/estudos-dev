const botao = document.querySelector('#btn1')
const formulario = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')

botao.addEventListener('click', function() {
    if(formulario.style.display === 'none') {
        formulario.style.display = 'block'
        botao.innerText = 'Fechar detalhes'
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }else {
        formulario.style.display = 'none'
        botao.innerText = 'Ver detalhes'
        document.body.style.backgroundColor = 'transparent'
    }
    
})