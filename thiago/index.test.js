const index = require("./index")// 

// testes juros simples:

test('juros simples, 2% de 1000 reais em 1 ano é igual a 240', () =>{
    expect(index.calcularJurosSimples(1000,2,1)).toBe(240);
});

test('juros simples, erro porque capital é negativo', () => {
    expect(index.calcularJurosSimples(-1000,2,1)).toBe(false);
})

test('juros simples, capital é não é inteiro', () => {
    expect(index.calcularJurosSimples(1000.50,2,1)).toBe(false)
})

test('juros simples, erro porque porcentagem é negativa', () => {
    expect(index.calcularJurosSimples(1000, -2, 1)).toBe(false);
})

test('juros simples, porcentagem não é inteiro', () => {
    expect(index.calcularJurosSimples(1000,2.3,1)).toBe(false)
})

// testes juros compostos:

test('juros compostos, rendimento de 2% ao mês em 1 ano de 1000 reais é igual a 1268,24', () => {
    expect(index.calcularJurosCompostos(1000,2,1)).toBe(1268.24);
})

test('juros compostos, erro porque porcentagem é negativa', () => {
    expect(index.calcularJurosCompostos(1000,-2,1)).toBe(false);
})

test('juros compostos, erro porque capital não é negativo', () => {
    expect(index.calcularJurosCompostos(-1000,2,1)).toBe(false);
})

test('juros compostos, erro porque capital não é inteiro', () => {
    expect(index.calcularJurosCompostos(1000.3,2,1)).toBe(false);
})

test('juros compostos, erro porque porcentagem não é inteiro', () => {
    expect(index.calcularJurosCompostos(1000,2.3,1)).toBe(false);
})

// testes rentabilidade real:

test('rentabilidade real, rentabiliade de 8% e inflação de 4% dá 3,8% de rentabilidade real', () => {
    expect(index.calcularRentabilidadeReal(8,4)).toBe(3.8)
})

test('rentabilidade real, erro porque rentabiliade de negativa', () => {
    expect(index.calcularRentabilidadeReal(-8,4)).toBe(false)
})

test('rentabilidade real, erro porque rentabiliade não é inteiro', () => {
    expect(index.calcularRentabilidadeReal(8.3,4)).toBe(false)
})

test('rentabilidade real, erro porque inflação negativa', () => {
    expect(index.calcularRentabilidadeReal(8,-4)).toBe(false)
})

test('rentabilidade real, erro porque inflação não é inteiro', () => {
    expect(index.calcularRentabilidadeReal(8,4.3)).toBe(false)
})

// testes rentabilidade passada:

test('rentabilidade passada, preço de compra R$9 e preço atual R$14 dá o rendimento de 55,56%', () => {
    expect(index.calcularRentabilidadePassada(14,9)).toBe(55.56)
})

test('rentabilidade passada, erro porque preço de compra negativo', () => {
    expect(index.calcularRentabilidadePassada(14,-9)).toBe(false)
})

test('rentabilidade passada, erro porque preço atual é negativo', () => {
    expect(index.calcularRentabilidadePassada(-14,9)).toBe(false)
})