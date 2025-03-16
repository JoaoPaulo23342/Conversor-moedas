function calc(a , b, op) {
   const result = op(a, b)

   return result
}

function multiplica(x,y){
    return x * y
}

let resulta = calc(4,4,function (c,d) {
    return c / d

})
let diminui = calc (10, 5, function (m,n) {
    return m - n
})
console.log(resulta, diminui)

let funcao = a => {
    console.log('isso é uma funcao anonima')
    for(a = a; a < 10; a++) {
        console.log(a)
    }
}
funcao(2)

arr = ['banana', 'cenoura', 'OLA']

arr.forEach(function (element, i, arr) {
    console.log({
        element,
        i,
        arr
    })
})