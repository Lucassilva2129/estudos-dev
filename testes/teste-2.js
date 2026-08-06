const alunos = [
  { nome: 'Lucas', nota: 8 },
  { nome: 'Ana', nota: 9 },
  { nome: 'Pedro', nota: 6 },
  { nome: 'Maria', nota: 7 }
]

function aprovados (notaMinima) {
  return alunos.filter(item => item.nota >= notaMinima)
}

console.log(aprovados(7))