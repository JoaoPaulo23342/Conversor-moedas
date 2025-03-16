let num = Number(prompt('digite o número para ser usado na tabuada'))
for(i = 1; i <= 20; i++) {
    let result = num * i
    alert(`${num} x ${i} = ${result}`)
}