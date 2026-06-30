// Retorna apenas números pares de uma lista

const numeros = [1, 2, 3, 4, 5, 6, 7, 8] // lista de números 

function apenasPares() { // Função para retornar númers pares
    const list = []   // Lista vazia para adicionar somente os números pares
    for (let num of numeros) { // Percorre a lista números
        if (num % 2 === 0)       // Verifica se o número é par
            list.push(num)       // Adiciona o número a lista vazia

    }

    return list // Retorna a lista com os números selecionados
}

console.log(apenasPares()) // Exibe a lista com os números pares.