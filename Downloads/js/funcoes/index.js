function Delta(a,b,c) {
   return b ** 2 - 4 * a * c
    
}

function baskara(a, b, c) {
    const delta = Delta(a, b, c);
    if (delta < 0) {
        console.log('Não há raízes reais, pois delta é negativo.');
         // Retorna null se não houver raízes reais
    } else if (delta === 0) {
        const r = -b / (2 * a); // Cálculo da raiz única
        return { r1: r, r2: r }; // Retorna a raiz única
    } else {
        const r1 = (-b - Math.sqrt(delta)) / (2 * a); // Cálculo da primeira raiz
        const r2 = (-b + Math.sqrt(delta)) / (2 * a); // Cálculo da segunda raiz
        return [ r1, r2 ]; // Retorna as raízes
    }

}
console.log(Delta(1,-5,6))
console.log(baskara(1, -5, 6)) 
