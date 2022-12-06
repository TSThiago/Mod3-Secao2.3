// C = capital 
// i = porcentagem
// t = tempo em ano
// M = montante

function calcularJurosSimples(C, i, t) {
    C = parseInt(C)
    i = parseInt(i)
    t = parseFloat(t)
    
    if((C < 0) || i < 0){
        return false
    }else{
        let j = C * (i/100) * (t*12)
        return j
    }
}

function calcularJurosCompostos(C, i, t) {
    C = parseInt(C)
    i = parseInt(i)
    t = parseFloat(t)

    if((C < 0) || i < 0){
        return false
    }else{
        let M = C * (1 + (i/100))**(t*12)
        return M.toFixed(2)
    }
}

// R = rentabilidade
// r = porcentagem da rentabilidade
// i = porcentagem da inflação

function calcularRentabilidadeReal(r,i) {
    r = parseInt(r)
    i = parseInt(i)
    
    if(r < 0 || i < 0){
        return false
    }else{
        let R = (1 + (r/100)) / (1 + (i/100)) - 1
        return (R * 100).toFixed(1)
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
        return R.toFixed(2)
    }
}

console.log(calcularRentabilidadePassada(14,9))