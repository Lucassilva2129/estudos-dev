const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

const numeros = lista.filter( numero => numero  % 2 === 0 ) // filtar os numeros divisivel por dois e resto zero ( pares ) e mostrar em uma nova lista numeros.

console.log(numeros) // Lista com o filtro ( Pares )