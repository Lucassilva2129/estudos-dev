const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },   // lista de produtos
    { material: 'PETG', peso: 150, horas: 3 }
]

const materiaPrima = produtos.find(function (item) {
    return item.material === 'ABS'             // procura e exibe somente o material ABS
})
console.log(materiaPrima)