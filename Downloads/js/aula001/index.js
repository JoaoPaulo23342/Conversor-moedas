let escolha = prompt('digite qual operacao vc quer')
let num1 = Number(prompt('digite o primeiro numero'))
let num2 = Number(prompt('digite o segundo numero'))


switch (escolha) {
    case 'soma':
        alert(`a soma é ${num1 + num2}`)
        break;
    case 'divisao':
        alert(`a divisão é ${num1 / num2}`)
        break;
        case 'multiplicacao':
            alert(`a multiplicacao é ${num1 * num2}`)
            break;
            case 'subtracao':
                alert(`a subtracao é ${num1 - num2}`)
                break;

}