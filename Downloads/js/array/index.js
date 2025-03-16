const listaDeCompras = []

listaDeCompras[0] = "arroz"
listaDeCompras[1] = "feijão"
listaDeCompras[2] = true
listaDeCompras[3] = 7








const arr = ["frodo", "sam", "merry", "pippin", "Gandlf"]
let im = arr.includes('frodo') // verifica se o parametro está dentro do array se estiver ele retorna true senão retorna false
let i = arr.indexOf("frodo") // verifica o indice do parametro informado está dentro do array e retorna o numero do indice
console.log(i,im)

const hobbits = arr.slice(-4)
console.log(`OS HOBBITS SÃO ${hobbits}`)

// concat 
// concatenar array juntar dois arrays

console.log(arr)
// substituir elementos
//splice
const a = arr.splice(arr, 3, "Trafalgar law")
console.log(arr)
// ------------------- splice é ultilzado para substituir elementos com 3 parametros o primeiro é o inicial o segundo é o indice a ser substituido e o terceiro é o valor que vai ser substituido
// -------------------

// iterar sobre os elementos do array
for(i = 0; i <= arr.length; i++) {
    const element = arr[i]
    console.log(`${element} se encontra na posição ${i}`)
}

