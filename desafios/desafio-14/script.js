const botao = document.querySelector('#botao')
const caixa = document.querySelector('#caixa')

botao.addEventListener('click', function(){
    if (caixa.style.display == 'none'){ // se estiver escondido none = escondido
        caixa.style.display = 'block'  // ao clicar aparece block = mostrar
    }else {
        caixa.style.display = 'none' // se estiver escondido ao clicar mostra
    }
    
})

