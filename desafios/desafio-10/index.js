const listNumeros =[1,-1, 2, -2, 3, -3, 4, -4]

function apenasPositivos () { // Função para retornar apenas os números positivos.
const list =[] // Nova lista onde vão os números positivos, inicia vazia.
    for (let num of listNumeros){ // Percorre cada item da lista
        if (num > 0) {  // Somente os números positivos
            list.push(num)  // .push adiciona o número dentro da lista list.
            
        }
       
    }
    return list // Retorna os números da lista selecionados
}
console.log(apenasPositivos()) // Chama a função e exibe os números na nova lista.