let valor = parseFloat('3')

console.log(typeof valor, valor)

let texto = String(18)

console.log(typeof texto, texto)

console.error(4 + 2)
let total = (2 + 3) * 4
let media = (8.4 + 4 + 7) / 3

console.log(media)

var age = 14
age >= 18 ? console.log('voce pode dirigir') : console.log('voce nao pode dirigir') 

let hor = 12

if(hor <= 12) {
    console.log('bom dia')
} else if (hor <= 19 && hor > 12) {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}
let option = 1

switch (option) {
    case 1:
        console.log('Consultar pedido')
        break;
    case 2:
        console.log('Falar com atendente')
        break;
    } 
    // tratamento de erros

try {
    console.log(reustr)
} catch (err) {
    console.log(`Erro de referencia: parametro não definido ENGLISH: ${err}`)
}
finally {
    console.log('programa funcionando corretamente')
}

let result = 0

try {
    console.log(refjedwiw)
} 
    catch (e) {
    console.log('erro')
} finally {
    console.log('fim')
}

function message() {
    console.log('ola')
}

function mensagem(a) {
    console.log('Olá, ' + a)
}
let some = sum(2,2)
console.log(`o resultado do escopo é ${some}`)
mensagem('João')

function sum (a,b) {
    let result = a + b
    return result

}
let resultado = sum(3,5)

resultado++
console.log(resultado)


/**
 * 
 * @param {String} email user email
 * @param {String} password String user
 */
function signIn(email, password) {
    // TODO O FLUXO DE AUTENTICACAO DO USUARIO
    if(email === true && password === true) {
        console.log('entrou')

    } else {
        console.log('tente novamente')
    }

    return 7
}

signIn()


let nome = function (a,b) {
    return a + b
}

let result2 = nome(2,3)
console.log(result2)
let showMessage = function() {
    console.log('olá mensagem')
}

// arrow Function

const MostrarFuncao = () => {
    console.log('ola')
}

MostrarFuncao()


let showMessage2 = (nome) => {
    console.log('ola, ' + nome)
}

showMessage2('João')

// callBack FUNCTION: é uma funcao passada para outra função como argumento

function execute(taskname, callback) {
    console.log('executando tarefa: ' + taskname)
    callback()

}
execute('Download do arquivo...',  () => {
    console.log('tarefa finalizada.')
})