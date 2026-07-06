const produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 100 },
    { nome: 'Tênis', preco: 200 }
]

const produto = produtos.map( valor => valor.preco * (1 - 0.20) ) // desconto de 20% em cada item preço
console.log(produto)  // Exibe os novos preços