const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },
    { material: 'PETG', peso: 150, horas: 3 },            // objetos da array
    { material: 'PLA', peso: 100, horas: 2 },
]
const precos = produtos.map((item) => item.peso * 0.8)    // calcula o valor de cada item definindo um valor por gramas do peso
console.log(precos)                                       // exibe a lista de valores de cada material