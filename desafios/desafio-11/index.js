/* const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

const numeros = lista.filter( numero => numero  % 2 === 0 ) // filtar os numeros divisivel por dois e resto zero ( pares ) e mostrar em uma nova lista numeros.

console.log(numeros) // Lista com o filtro ( Pares ) */

const numeros = [5, 12, 3, 18, 7, 25, 1, 15]

const maiores = numeros.filter(numero => numero > 10) // Uma lista que filtra os numeros maiores que 10 e salva em uma nova lista (maiores)

console.log(maiores)

const palavras = ['sol', 'casa', 'programador', 'dev', 'javascript', 'css']

const grandes = palavras.filter (palavra => palavra.length > 4)

console.log(grandes)
