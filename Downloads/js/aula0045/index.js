
let name = prompt('Digite seu nome')
let city = prompt('Você já visitou alguma cidade? sim/não')
let cidade = []


while (city === 'sim') {
    let pergunta = prompt('qual a cidade que você visitou?')
    cidade.push(pergunta)
    let pergunta2 = prompt('deseja continuar? sim/não')
    if(pergunta2 === 'nao') {
        break;
    }
    
}

alert(name)
alert(`o numero de cidades que você visitou foi de ${cidade.length}`)
alert(`as cidades que você visitou foram: ${cidade}`)

