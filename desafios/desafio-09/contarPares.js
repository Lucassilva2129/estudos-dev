const numeros = [1, 2, 3, 4, 5]

function contarPares() {
    let numPares = 0

    for (let num of numeros) {
        if (num % 2 === 0){
            numPares +=1
        }
    }
   return`${numPares}`
}
 console.log(contarPares())