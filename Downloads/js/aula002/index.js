let nome1 = prompt('Digite o primeiro nome')
let nome2 = prompt('digite o segundo nome')
let campoEstudo = prompt('digite o campo de estudo')
let anoNascimento = Number(prompt('digite o ano de nascimento'))
let res = 2025 - anoNascimento

const h1 = document.getElementsByTagName('h1')[0]
h1.textContent = `Seu nome completo é ${nome1} ${nome2}`;
const h2 = document.getElementsByTagName('h1')[1]
h2.textContent = `seu campo de estudo é ${campoEstudo} `;
const h3 = document.getElementsByTagName('h1')[2]
h3.textContent = `Sua idade é ${res}`
