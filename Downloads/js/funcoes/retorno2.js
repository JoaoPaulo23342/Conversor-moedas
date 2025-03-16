function calc(a,b) {
    const media = (a + b) / 2
    return media
}

console.log(calc(9,8))


function quadrado(n) {
    return n * n

}
console.log(quadrado(5))

function ehPar(n) {
    return n % 2 === 0;
    
}
console.log(`o numero é par?  ${ehPar(4)}`)
console.log(`o numero é par?  ${ehPar(3)}`)

function maiorNum(a,b) {
    if(a > b) {
        return a
    } else {
        return b
    }

} 
let result = maiorNum(3,10)
console.log(`o maior numero é ${result}`)

function concatenar(str1,str2) {
    return str1 +' '+ str2
}
let resultado = concatenar('ola', 'mundo')
console.log(resultado)
function calculadora(a,b,op) {
    switch (op) {
        case 'soma':
            return a + b
        case 'subtracao':
            return a - b
        case 'multiplicacao':
            return a * b
        case 'divisao':
            return a / b
        default:
            console.log('Não existe esse tipo de resposta')
    }
    
}

console.log(calculadora(10,5,'multiplicacao'))


