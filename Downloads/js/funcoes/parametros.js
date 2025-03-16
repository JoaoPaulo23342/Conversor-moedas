function dobro(x) {
    let variavel = prompt('digite quantas vezes vc quer repetir o programa')
    for(i = 0; i <= variavel; i++) {
    alert(`o dobro de ${i} é ${i * 2}`)
    }
}

dobro(4)

function criarUsuario(nome,email,idade) {
    const usuario = {
        nome,
        email,
        idade
    }
    console.log(usuario)

}
criarUsuario('joao', 'joao@email.com', 21)

function all(usuario){
    usuario.nome
    usuario.email
    usuario.senha
    usuario.endereco

}

const dadosUsuario = {
    nome: "",
    email: "",
    senha: "",
    endereco: "",
}
all(dadosUsuario)