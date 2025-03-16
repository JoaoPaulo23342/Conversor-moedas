// High order functions



function calcular(a,b,op) {
    console.log('realizando uma operação')
    const result = op(a,b)
    return result
}

function somar(a,b) {
    console.log('realizando uma soma')
    let result = a + b
    console.log(result)
    return result


}
calcular(3,5,somar)

function exibirElemento (element, i, arr) {
    console.log({
        element,
        i,
        arr
    })
}

const list = ['maça', 'banana', 'limon', 'orange']

for(i = 0; i < list.length; i++){
    exibirElemento(list[i], i, list)
}
list.forEach(exibirElemento)


