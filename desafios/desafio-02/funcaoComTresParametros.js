/*
function calculadora (a , b , operacao) {

if (operacao === 'somar'){
    return a + b
}

else if (operacao === 'subtrair') {
    return a - b
}

else if (operacao === 'multiplicar') {
     return a * b
}

else {
    return a / b
}

}

console.log(calculadora(10 , 5 , 'somar'))
console.log(calculadora(10 , 5 , 'subtrair'))
console.log(calculadora(10 , 5 , 'multiplicar'))
console.log(calculadora(10 , 5 , 'dividir'))
*/

function calcular(a, b, operar) {
    if (operar === 'somar') {
        return a + b
    }
    else if (operar === 'subtrair') {
        return a - b
    }
    else if (operar === 'dividir') {
        return a / b
    }
    else if (operar === 'multiplicar') {
        return a * b
    }
}

console.log(calcular(5, 5, 'somar'))
console.log(calcular(5, 5, 'subtrair'))
console.log(calcular(5, 5, 'dividir'))
console.log(calcular(5, 5, 'multiplicar'))