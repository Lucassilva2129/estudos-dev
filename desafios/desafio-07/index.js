const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },
    { material: 'PETG', peso: 150, horas: 3 },            // Objetos da array
    { material: 'PLA', peso: 100, horas: 2 },
]
const precos = produtos.map((item) => item.peso * 0.8)    // Cada produto teve seu preço calculado baseado no peso
console.log(precos)                                       // Exibe a lista de valores de cada material