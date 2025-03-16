function calcularMedia(a,b){
    const media = (a + b) / 2
    return media
}

const result = calcularMedia(3,5)

console.log(result)

function criarProduto(nome, preco) {
   const produto = { 
    nome,
    preco,
    estoque: 1
   }
   return produto

}

const retorno = criarProduto('Bixcoito', 3.53)
console.log(retorno)

function areaRetangular(b,h) {
     return (b * h) 


}

console.log(areaRetangular(3,5))

function areaQuadrada(lado) {
    return areaRetangular(lado, lado) / 2 
}

console.log(areaQuadrada(9))

function ola() {
    let texto = "..."
    
    texto = 'ola mndo'
    
    console.log(texto)
    return texto
}
ola()




