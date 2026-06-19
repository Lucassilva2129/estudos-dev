const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },
    { material: 'PETG', peso: 150, horas: 3 },
    { material: 'PLA', peso: 100, horas: 2 },
]

const todosPLA = produtos.filter((item) => item.material === 'PLA' ) // filtra e exibe todos os PLAs
 
console.log(todosPLA)