// C = capital 
// i = porcentagem
// t = tempo em ano
// M = montante

module.exports = {calcularJurosSimples, calcularJurosCompostos, calcularRentabilidadeReal, calcularRentabilidadePassada}

function calcularJurosSimples(C, i, t) {
    
    if((C < 0) || i < 0 || Number.isInteger(C) === false || Number.isInteger(i) === false){
        return false
    }else{
        let j = C * (i/100) * (t*12)
        return j
    }
}

function calcularJurosCompostos(C, i, t) {

    if((C < 0) || i < 0 || Number.isInteger(C) === false || Number.isInteger(i) === false){
        return false
    }else{
        let M = C * (1 + (i/100))**(t*12)
        return parseFloat(M.toFixed(2))
    }
}
// R = rentabilidade
// r = porcentagem da rentabilidade
// i = porcentagem da inflação

function calcularRentabilidadeReal(r,i) {
    
    if(r < 0 || i < 0 || Number.isInteger(r) === false || Number.isInteger(i) === false){
        return false
    }else{
        let R = (1 + (r/100)) / (1 + (i/100)) - 1
        return parseFloat((R * 100).toFixed(1))
    }
}

// R = rentabilidade
// PA = preço atual
// PP = preço passado

function calcularRentabilidadePassada(PA,PP){
    if(PA < 0 || PP < 0){
        return false
    }else{
        let R = (PA / PP) * 100 - 100
        return parseFloat(R.toFixed(2))
    }
}

console.log(calcularRentabilidadePassada(14,9))