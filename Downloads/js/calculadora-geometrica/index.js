do {
   var valor = prompt('\nBem vindo ao Sistema de Calcular a área de formas geométricas\n\n1. área do triangulo: base * altura / 2\n2. área do retângulo: base * altura\n3.área do quadrado lado * lado\n4.área do trapézio (base maior + base menor) * altura / 2\n5.área do círculo: pi * raio ao quadrado\n6.sair')
    function areaTriangulo() {
        if(valor === '1') {
            let valor2 = Number(prompt('digite o primeiro número'))
            let valor3 = Number(prompt('digite o segundo número'))
            return valor2 * valor3 / 2
        }   
    }
    function areaRetangulo(b, h) {
        if(valor === '2') {
            b = Number(prompt('digite o primeiro numero'))
            h = Number(prompt('digite o segundo numero'))
            return b * h
        }}
    function areaQuadrado(lado) {
        if(valor === '3') {
            lado = Number(prompt('digte o valor do lado'))
            return lado ** 2
        }}
        function areaTrapezio(bMenor, bMaior, h){
            if (valor === '4') {
                bMenor = Number(prompt('Digite o valor da base menor'))
                bMaior = Number(prompt('digite o valor da base maior'))
                h = Number(prompt('digite o valor da altura'))
                return (bMaior + bMenor) * h / 2
            }}
        function areaCirculo(pi = 3.14,raio) {
            if(valor === '5') {
                raio = Number(prompt('digite o valor do raio'))
                return pi * raio ** 2
            }
        }
        switch (valor) {
            case '1':
                alert(`o valor da área do triangulo é ${areaTriangulo()}`)
                break;
            case '2':
                alert(`o valor da área do Retangulo é ${areaRetangulo()}`)
                break;
            case '3':
                alert(`o valor da área do Quadrado é ${areaQuadrado()}`)
                break;
            case '4':
                alert(`o valor da área do Trapézio é ${areaTrapezio()}`)
                break;
            case '5':
                alert(`o valor da área do Circulo é ${areaCirculo()}`)
                break;
            case '6':
                alert('saindo...')
                break;
            default:
                alert('opção inválida.')
            
        }

        
    
    
    
} while (valor !== '6')