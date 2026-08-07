const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const mural = document.querySelector('#mural')

botao.addEventListener('click', function() {
    if ( texto.value === '') {
        window.alert('Digite um texto!')
        return
    }

    const novoItem = document.createElement('p') // cria um novo item, um paragrafo
    novoItem.innerText = texto.value  // o texto digitado será um novo paragrafo

    mural.appendChild(novoItem) // coloca o paragrafo dentro da #div mural
    texto.value = '' // limpa o campo texto

})