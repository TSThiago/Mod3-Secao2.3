const index = require("../thiago/index")

//testes juros simples

test('calculo de juros simples, 2% sobre 1000 durante 1 ano e igual a 240', () =>{
    expect(index.calcularJurosSimples(1000, 2, 1).toBe(240))
});

test('calculo de juros simples, erro porque valor inicial não é inteiro', () =>{
    expect(index.calcularJurosSimples(1000.50, 2, 1).toBeFalsy())
});

test('calculo de juros simples, erro porque valor inicial não é positivo', () =>{
    expect(index.calcularJurosSimples(-1000, 2, 1).toBeFalsy())
});

test('calculo de juros simples, erro porque juros não é inteiro', () =>{
    expect(index.calcularJurosSimples(100, 2.5, 1).toBeFalsy())
});

test('calculo de juros simples, erro porque juros não é positivo', () =>{
    expect(index.calcularJurosSimples(1000, -2, 1).toBeFalsy())
});

//juros compostos

test('calculo de juros compostos, 2% sobre 1000 durante 1 ano e igual a 1268.24', () =>{
    expect(index.calcularJurosCompostos(1000, 2, 1).toBe(1268.24))
});

test('calculo de juros compostos, erro porque valor inicial não é inteiro', () =>{
    expect(index.calcularJurosCompostos(1000.50, 2, 1).toBeFalsy())
});

test('calculo de juros compostos, erro porque valor inicial não é positivo', () =>{
    expect(index.calcularJurosCompostos(-1000, 2, 1).toBeFalsy())
});

test('calculo de juros compostos, erro porque juros não é inteiro', () =>{
    expect(index.calcularJurosCompostos(1000, 2.5, 1).toBeFalsy())
});

test('calculo de juros compostos, erro porque juros não é positivo', () =>{
    expect(index.calcularJurosCompostos(1000, -2, 1).toBeFalsy())
});

//rentabilidade real

test('calculo de rentabilidade real, 8% de rentabilidade e 4% de inflação e igual a 3.8%', () =>{
    expect(index.calcularRentabilidadeReal(8,4).toBe(3.8))
});

test('calculo de rentabilidade real, erro porque rentabilidade não é inteiro', () =>{
    expect(index.calcularRentabilidadeReal(8.5,4).toBeFalsy())
});

test('calculo de rentabilidade real, erro porque rentabilidade é negativo', () =>{
    expect(index.calcularRentabilidadeReal(-8,4).toBeFalsy())
});

test('calculo de rentabilidade real, erro porque inflacao não é inteiro', () =>{
    expect(index.calcularRentabilidadeReal(8,4.5).toBeFalsy())
});

test('calculo de rentabilidade real, erro porque inflacao é negativo', () =>{
    expect(index.calcularRentabilidadeReal(8,-4).toBeFalsy())
});

//rentabilidade passada

test('calculo de rentabilidade real, preço atual 14 e preço passado 9 é igual a 55%', () =>{
    expect(index.calcularRentabilidadePassada(14,9).toBe(55.55))
});

test('calculo de rentabilidade real, erro porque preço atual não é inteiro', () =>{
    expect(index.calcularRentabilidadePassada(14.5,9).toBeFalsy())
});

test('calculo de rentabilidade real, erro porque preço atual é negativo', () =>{
    expect(index.calcularRentabilidadePassada(-14,9).toBeFalsy())
});

test('calculo de rentabilidade real, erro porque preço passado não é inteiro', () =>{
    expect(index.calcularRentabilidadePassada(14,9.5).toBeFalsy())
});

test('calculo de rentabilidade real, erro porque preço passado é negativo', () =>{
    expect(index.calcularRentabilidadePassada(14,-9).toBeFalsy())
});