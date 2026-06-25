function maiorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `O número ${num1} é o MAIOR!`
    } else if (num2 > num1 && num2 > num3) {
        return `O número ${num2} é o MAIOR!`
    }else {
        return `O número ${num3} é o MAIOR!`
    }
}

console.log(maiorDeTres(10,5,8))