const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#result')


botao.addEventListener ('click', function() {
const nomeValor = nome.value
const idadeValor = Number(idade.value) 

// Erro se algum campo estiver vazio!
if (nomeValor == '' || idadeValor == '') {
    resultado.innerText = 'Preencha todos os campos!'
    return
}

if ( idadeValor > 18 ) {
    resultado.innerText = `Olá ${nomeValor}, você é maior de idade!`
} else {
    resultado.innerText = `Olá ${nomeValor}, você é menor de idade!`
}

})