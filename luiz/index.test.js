const index = require("../thiago/index")

test('calculo de juros simples, 2% sobre 1000 durante 1 ano', () =>{
    expect(index.calcularJurosSimples(1000, 2, 1).toBe(240))
});

test('calculo de juros simples, erro porque valor inicial não é inteiro', () =>{
    expect(index.calcularJurosSimples(1000.50, 2, 1).toBeFalsy())
});

test('calculo de juros simples, erro porque valor inicial não é positivo', () =>{
    expect(index.calcularJurosSimples(-1000, 2, 1).toBeFalsy())
});

test('calculo de juros simples, erro porque valor inicial não é positivo nem um inteiro', () =>{
    expect(index.calcularJurosSimples(-1000.50, 2, 1).toBeFalsy())
});

test('calculo de juros compostos, 2% sobre 1000 durante 1 ano', () =>{
    expect(index.calcularJurosCompostos(1000, 2, 1).toBe(1268.24))
});

test('calculo de juros compostos, erro porque valor inicial não é inteiro', () =>{
    expect(index.calcularJurosCompostos(1000.50, 2, 1).toBeFalsy())
});

test('calculo de juros compostos, erro porque valor inicial não é positivo', () =>{
    expect(index.calcularJurosCompostos(-1000, 2, 1).toBeFalsy())
});

test('calculo de juros compostos, erro porque valor inicial não é positivo nem um inteiro', () =>{
    expect(index.calcularJurosCompostos(-1000.50, 2, 1).toBeFalsy())
});