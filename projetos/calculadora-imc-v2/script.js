const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')



botao.addEventListener('click', function () {
    const alturaValor = Number(altura.value) / 100 // converte o valor de cm para metros
    const pesoValor = Number(peso.value)

    if (alturaValor === 0 || pesoValor === 0) {
        resultado.innerText = 'Preencha todos os campos!'
        return
    }

    const imc = pesoValor / (alturaValor ** 2)

    // Classificação do IMC

    const classific = [
        { limite: 18.5, texto: 'Abaixo do peso' },
        { limite: 25, texto: 'Peso normal' },
        { limite: 30, texto: 'Sobrepeso' },
        { limite: Infinity, texto: 'Obesidade' }
    ]

    const classificado = classific.find( item => imc < item.limite).texto

    resultado.innerText = `Seu IMC é ${imc.toFixed(2)}. ${classificado}`