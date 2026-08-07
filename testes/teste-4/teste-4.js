const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const lista = document.querySelector('#lista')

botao.addEventListener('click', function() {
    if (texto.value === '') {
        window.alert('Digite uma tarefa!')
        return
    }
    
    // criando uma caixa tipo lista
    const novoItem = document.createElement('li')
     // colocando texto na caixa
    novoItem.innerText = texto.value
    // adiciona a caixa dentro da lista

    lista.appendChild(novoItem)
    texto.value = ''
})