list = ['banana', 'true', true, 'orange']

list.forEach(function (element, i, array) {
    console.log({
        element,
        i,
        array
        
    })
})

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // map
const nomes = personagens.map(function (nome) {
    return nome.nome
})

console.log(nomes)

// filter
//

const orcs = personagens.filter(function (orc) {
    return orc.raca === 'Orc'

})
console.log(orcs)

// reduce

const nivelTotal = personagens.reduce(function (value, personagem) {
    return value + personagem.nivel
}, 0)

console.log(nivelTotal)

// reduce advanced

const racas = personagens.reduce ( function (value, personagem) {
    if(value[personagem.raca]) {
        value[personagem.raca].push(personagem)
    } else {
        value[personagem.raca] = [personagem]
    }
    return value
}, {})

// sort // // // sort // // //  // sort  //  // // //

personagens.sort(function (a,b) {
    return a.nivel - b.nivel
})

console.log(personagens)

