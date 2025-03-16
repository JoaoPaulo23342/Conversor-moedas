const imovel = []

let opcao = ''

do {
    opcao = prompt("Bem vindo ao sistema de cadastro de imoveis\n" +
        "\nTotal de imóveis: " + imovel.length + "\n\nEscolha uma opção: \n1. Novo imóvel\n 2. Listar Imóveis\n 3. sair"
    )
    switch (opcao) {
        case '1':
            const imoveis = {}
            imoveis.proprietario = prompt('Informe o nome do proprietário do imóvel: ')
            imoveis.quartos = prompt('Informe a quantidade de quartos do imóvel')
            imoveis.banheiros = prompt('quantos banheiros possui o imovel')
            imoveis.garagem = prompt('possui garagem? sim/não')
            const confirmacao = confirm(
                'Salvar este imóvel? \n'+
                `\nProprietário: ${imoveis.proprietario}` +
                `\nQuartos: ${imoveis.quartos}` +
                `\nBanheiros: ${imoveis.banheiros}` +
                `\nPossui garagem? ${imoveis.garagem}`
                
            )
            if (confirmacao == true) {
                imovel.push(imoveis)
            }
            
            break;
            
        case '2':
            for(i = 0; i < imovel.length; i++) {
                alert(
                    `Imóvel ${i + 1} ` +
                    `\nProprietário: ${imovel[i].proprietario}` +
                    `\nQuartos: ${imovel[i].quartos}` +
                    `\nBanheiros: ${imovel[i].banheiros}` +
                    `\nPossui garagem? ${imovel[i].garagem}`
                )
            }
            break;
        case '3':
            alert('saindo...')
            break;
        default:
            alert('nenhuma opção encontrada')
    }
}while (opcao !== '3') 
