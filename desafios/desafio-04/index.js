
// o que fazer quando a lista tem 100 itens? Você não vai escrever 100 console.log — é aí que entra o loop for.
/*const alunos = ['Lucas', 'Larissa', 'Bob']

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}

Lê assim em português: "começa com i = 0, enquanto i for menor que o tamanho do array, executa o bloco e soma 1 no i."
Três partes do for:

let i = 0 → começa do zero
i < alunos.length → para quando acabar o array
i++ → avança para o próximo item

O resultado é o mesmo do seu código, mas funciona para qualquer tamanho de lista.


length é uma propriedade que te diz o tamanho do array — quantos itens ele tem.
javascriptconst alunos = ['Lucas', 'Larissa', 'Bob']
console.log(alunos.length) // 3
No for ele serve para saber quando parar:
javascriptfor (let i = 0; i < alunos.length; i++)
//                    ↑
//              para quando i chegar em 3
O array tem índices 0, 1, 2 — e length é 3. Por isso usamos i < 3 e não i <= 3, senão tentaria acessar alunos[3] que não existe.
Pensa assim:
['Lucas', 'Larissa', 'Bob']
    0         1        2      ← índices
                              ← length = 3
O length sempre vale um a mais que o último índice — porque a contagem começa do zero, mas o tamanho conta de 1.



const notas = [7, 9, 10, 3, 5]

let total = 0
for ( let i = 0 ; i < notas.length ; i++) {
    console.log(notas[i])

    total = total + notas[i]
    // console.log(total)
    // console.log(notas[i])
}
const media = total / notas.length
console.log(media)

*/

// for of

const notas = [7, 9, 10, 3, 5]
let total = 0

for (let nota of notas) {
    total += nota
    //console.log(nota)
}

const media = total / notas.length
console.log('Média:', media , 'Total:', total)