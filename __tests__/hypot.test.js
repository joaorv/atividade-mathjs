const math = require('mathjs');

describe('Função hypot da Math.js', () => {

  test('Caso de sucesso', () => {
    expect(math.hypot(3, 4)).toBe(5);
  });

  test('Aceita múltiplos argumentos', () => {
    expect(math.hypot(2, 3, 6)).toBe(7);
  });

  test('Aceita valores negativos', () => {
    expect(math.hypot(-3, -4)).toBe(5);
  });

  test('Retorna 0 para valores zerados', () => {
    expect(math.hypot(0, 0, 0)).toBe(0);
  });

  test('Retorna Infinity quando recebe Infinity', () => {
    expect(math.hypot(Infinity, 1)).toBe(Infinity);
  });

  test('Retorna NaN quando recebe NaN', () => {
    expect(Number.isNaN(math.hypot(NaN, 1))).toBe(true);
  });

  test('Entrada inválida', () => {
    expect(() => math.hypot('abc', 4)).toThrow();
  });

  test('Valor nulo', () => {
    expect(() => math.hypot(null, 4)).toThrow();
  });

});