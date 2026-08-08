const alunos = [
    {aluno: 'Lucas', nota: 10 },
    {aluno: 'Larissa', nota: 9 },
    {aluno: 'Bob', nota: 8 }
]

function mediaDaTurma () {
   
   let total = 0
   for ( let num of alunos) {
    total += num.nota
   
   }
 
    return total / alunos.length
}
console.log(mediaDaTurma())