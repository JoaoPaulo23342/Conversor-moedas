const h1 = document.getElementsByTagName('h1')[0]
const h2 = document.getElementsByTagName('h1')[1]
const h3 = document.getElementsByTagName('h1')[2]
let nome = prompt('Digite o seu nome')
let velocidade = prompt('Digite a velocidade')
let nome2 = prompt('Digite o seu nome')
let velocidade2 = prompt('Digite a velocidade')
if(velocidade > velocidade2) {
    h1.textContent = `a velocidade do veiculo ${nome} é mais rapida cerca de ${velocidade} KM`
} else if(velocidade2 > velocidade) {
    h2.textContent = `a velocidade do veiculo ${nome2} é mais rapida cerca de ${velocidade2} KM`
} else {
    h3.textContent = 'as velocidades são iguais'
}
