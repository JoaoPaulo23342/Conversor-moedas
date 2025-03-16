let valorMetro = Number(prompt('Digite o valor em metros'))
let uniMedida = prompt('digite alguma dessas opções Milimetro(mm) centimetro(cm) Decimetro(dm) Decametro(dam) hectometro(hm) quilometro(km)')
let milimetro = valorMetro * 1000
let centimetro = valorMetro * 100
let Decimetro = valorMetro * 10
let Decametro = valorMetro * 0.1
let hectometro = valorMetro * 0.01
let quilometro = valorMetro * 0.001
switch (uniMedida) {
    case 'mm':
        alert(`O resultado da conversão de metros para ${uniMedida} é ${milimetro}`)
        break;
    case 'cm':
        alert(`O resultado da conversão de metros para ${uniMedida} é ${centimetro}`)
        break;
    case 'dm':
        alert(`O resultado da conversão de metros para ${uniMedida} é ${Decimetro}`)
        break;
    case 'dam':
        alert(`O resultado da conversão de metros para ${uniMedida} é ${Decametro}`)
        break;
    case 'hm':
        alert(`O resultado da conversão de metros para ${uniMedida} é ${hectometro}`)
        break;
    case 'km':
        alert(`O resultado da conversão de metros para ${uniMedida} é ${quilometro}`)
        break;
    default:
        alert('opção invalida')
    
}