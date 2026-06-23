const math = require('mathjs');

describe('divideScalar', () => {
  test('Caso de sucesso', () => {
    expect(math.divide(10, 2)).toBe(5);
  });

  test('Entrada inválida', () => {
    expect(() => math.divide('abc', 2)).toThrow();
  });

  test('Valor nulo', () => {
    expect(() => math.divide(null, 2)).toThrow();
  });
});