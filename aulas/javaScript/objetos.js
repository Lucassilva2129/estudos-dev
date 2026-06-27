const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },   // lista de produtos
    { material: 'PETG', peso: 150, horas: 3 }
]
// Função para mostrar o material e o peso do produto 
function mostrarDados() {
    for (let produto of produtos) {
        console.log(produto.material) // seleciona o material
        console.log(produto.peso) // seleciona o peso
    }
}
mostrarDados() // mostra os itens do produto selecionado

