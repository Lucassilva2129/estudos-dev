const material = document.querySelector('#material')
const altura = document.querySelector('#altura')
const largura = document.querySelector('#largura')
const profundidade = document.querySelector('#profundidade')
const complexidade = document.querySelector('#complexidade')
const acabamento = document.querySelector('#acabamento')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')
const impressora = document.querySelector('#impressora')
const consumoManual = document.querySelector('#consumoManual')
const tempo = document.querySelector('#tempo')
const kwh = document.querySelector('#kwh')
const preco = document.querySelector('#preco')
const bmcu = document.querySelector('#bmcu')
const ams = document.querySelector('#ams')
const interno = document.querySelector('#interno')

// Esconder o consumo manual
// função para esconder o campo de consumo de watts, so aparece ao selecionar 'Digitar manualmente'.
impressora.addEventListener('change', function () {
    if (impressora.value == 'manual') {
        consumoManual.style.display = 'block'
    } else {
        consumoManual.style.display = 'none'
    }
})

// função para calcular o valor 
botao.addEventListener('click', function () {
    const materialValor = material.value
    const alturaValor = altura.value
    const larguraValor = largura.value
    const profundidadeValor = profundidade.value
    const complexidadeValor = complexidade.value
    const acabamentoValor = acabamento.value
    const tempoValor = tempo.value
    const kwhValor = kwh.value
    const precoValor = preco.value
    const InternoValor = interno.value

    // O ? 15 : 0 é o operador ternário — se marcado soma 15W, senão soma 0.
    const consumoBmcu = bmcu.checked ? 15 : 0
    const consumoAms = ams.checked ? 30 : 0

    // iniciar if para ver se algum objeto não foi preenchido 

    if (tempoValor == '' || precoValor == '' || alturaValor == '' || larguraValor == '' || profundidadeValor == '') {
        resultado.innerText = 'Preencha todos os campos obrigatórios *!'

        return
    }
    // Listas
    const materiais = [
        { nome: 'PLA', densidade: 1.24 },
        { nome: 'ABS', densidade: 1.05 },
        { nome: 'PETG', densidade: 1.27 },
        { nome: 'TPU', densidade: 1.20 }
    ]

    const complexidades = [
        { tipo: 'simples', fator: 1.0 },
        { tipo: 'medio', fator: 1.3 },
        { tipo: 'complexo', fator: 1.6 }
    ]

    const acabamentos = [
        { tipo: 'natural', fator: 1.0 },
        { tipo: 'colorido', fator: 1.1 },
        { tipo: 'pintado', fator: 1.4 }
    ]

    // selecinoando os fatores para efetuar os calculos
    const fatorDensidade = materiais.find(item => item.nome === materialValor).densidade
    const fatorComplexidade = complexidades.find(item => item.tipo === complexidadeValor).fator
    const fatorAcabamentos = acabamentos.find(item => item.tipo === acabamentoValor).fator

    // calculos
    const volume = alturaValor * larguraValor * profundidadeValor
    const volumeReal = volume * (InternoValor / 100)
    const peso = volumeReal * fatorDensidade
    const custoMaterial = (peso / 1000) * precoValor
    const consulmoTotal = Number(impressora.value) + consumoBmcu + consumoAms
    const custoEnergia = (consulmoTotal / 1000) * tempoValor * kwhValor
    // preço final
    const precoFinal = (custoMaterial + custoEnergia) * fatorComplexidade * fatorAcabamentos

    // mostrar resultado
    resultado.innerText = `Valor estimado: R$ ${precoFinal.toFixed(2)}`

})