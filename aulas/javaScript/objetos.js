const produtos = [
    { material: 'PLA', peso: 200, horas: 4 },
    { material: 'ABS', peso: 350, horas: 6 },
    { material: 'PETG', peso: 150, horas: 3 }
]
function mostrarDados() {
    for (let produto of produtos) {
        console.log(produto.material)
        console.log(produto.peso)
    }
}
mostrarDados()