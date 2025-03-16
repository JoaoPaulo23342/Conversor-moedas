const guest = document.querySelector('#guest-1')
console.log(guest.textContent)


guest.textContent = 'joao'



const input = document.querySelector('#name')

input.classList.add('input-error')
//input.classList.remove('input-error')
input.classList.toggle('input-error')
const button = document.querySelector('.btn')
button.style.backgroundColor = 'red'
const guests = document.querySelector('ul')
const newGuest = document.createElement('li')
const guestName = document.createElement('span')
guestName.textContent = "mateus"
const guestSurName = document.createElement('span')
guestSurName.textContent = 'rodrigo'
newGuest.append(guestName)
newGuest.append(guestSurName)
//manipula o input a primeira linha desabilita o input por completo com o disabled e o segundo parametro que é verdadeiro ou falso
// a segunda linha mudamos o tipo do input através do type e especificamos o tipo dele no segundo parametro 'checkbox'
//input.setAttribute('disabled', true)
//input.setAttribute('type', 'checkbox')

//--------------------------
//input.removeAttribute('id')
// remove o id
//-----------------------------
/*
Remove a classe do botão 
----
button.removeAttribute('class')
console.log(button)
*/
/*
button.addEventListener('click', (ev) => {
    alert('botao acionado')
    console.log(ev.target)
})


window.addEventListener('click', (ev) => {
    

    console.log(ev.target)
    
})

*/

const ul = document.querySelector('ul')
ul.addEventListener('scroll', (ev) => {
    console.log(ev.scrollTop)
})

const form = document.querySelector('form')
form.onsubmit = (ev) => {
    ev.preventDefault()
    alert('o botao foi disparado')

}

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    alert('botao foi disparado novamente')

})
