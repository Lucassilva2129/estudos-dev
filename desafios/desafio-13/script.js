const tarefa = document.querySelector('#tarefa')
const botao = document.querySelector('#botao')
const lista = document.querySelector('#lista')

botao.addEventListener('click', function() {
    if(tarefa.value === '') {
        window.alert('Digite uma tarefa!')
        return
    }

    const novaLista = document.createElement('li')
    novaLista.innerText = tarefa.value
    lista.appendChild(novaLista)

    tarefa.value = ''
})