const texto = document.querySelector('#texto')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botao')
const listaDeprodutos = document.querySelector('#produtos')

botao.addEventListener('click', function(){
    if(texto.value === '' || preco.value === '') {
        window.alert('Preencha todos os campos!')
        return
    }

    const novoProduto = document.createElement('div')
    novoProduto.innerText = `${texto.value} - ${preco.value}`

    

    listaDeprodutos.appendChild(novoProduto)
   

    texto.value = ''
    preco.value = ''
})