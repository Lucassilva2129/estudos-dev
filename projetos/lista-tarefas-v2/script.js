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
//Funçao 3 - Remover tarefas
function removeTarefas(posicao) {
    tarefas.splice(posicao, 1) // Remove apenas 1 posição
}

// Contar tarefas
function contarTarefas() {
    console.log(tarefas.length)
}

// Chamada - adiciona as tarefas
adicionarTarefas('Estudar')
adicionarTarefas('Fazer exercício')
adicionarTarefas('Revisar')

contarTarefas() // Conta quantas tarefas tem no total
removeTarefas(1) // Remove a segunda tarefa
listarTarefas() // Lista depois de removido
