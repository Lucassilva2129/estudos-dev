const tarefas = []

// Função 1 — ADICIONAR (você já sabe fazer!)
function adicionarTarefas(tarefa) {
    tarefas.push(tarefa)
}

// Função 2 — LISTAR (usa o for...of)
function listarTarefas() {
    for (let tarefa of tarefas) {
        console.log(tarefa) 
    }
}
//funçao 3 - Remover tarefas
function removeTarefas(posicao) {
    tarefas.splice(posicao, 1) // Remove apenas 1 posição
}

// Chamada - adiciona as tarefas
adicionarTarefas('Estudar')
adicionarTarefas('Fazer exercício')
adicionarTarefas('Revisar')

removeTarefas(1) // Remove a segunda tarefa
listarTarefas() // Lista depois de removido
