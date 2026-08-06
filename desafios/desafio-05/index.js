const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },   // lista de produtos
    { material: 'PETG', peso: 150, horas: 3 }
]

const materiaPrima = produtos.find(function (item) {
    return item.material === 'ABS'             // procura e exibe somente o material ABS
})
console.log(materiaPrima)

// Aplicando função

const produtos2 = [
    { material: 'PETG', peso: 50, tempo: 2 },
    { material: 'TPU', peso: 70, tempo: 5 },
    { material: 'PLA', peso: 100, tempo: 4 }
]

function producao (material){
    return produtos2.find( item => item.material === material)
}

console.log(producao('PETG'))