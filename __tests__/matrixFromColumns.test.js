const math = require('mathjs');

describe('Função matrixFromColumns da Math.js', () => {

  test('Cria matriz a partir de vetores coluna', () => {
    expect(
      math.matrixFromColumns([1, 2, 3], [4, 5, 6])
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  test('Aceita vetores linha', () => {
    expect(
      math.matrixFromColumns([[1, 2, 3]], [[4, 5, 6]])
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  test('Aceita mistura de vetor linha e coluna', () => {
    expect(
      math.matrixFromColumns([1, 2, 3], [[4], [5], [6]])
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  test('Vetores de tamanhos diferentes', () => {
    expect(() =>
      math.matrixFromColumns([1, 2, 3], [4, 5])
    ).toThrow();
  });

  test('Nenhuma coluna informada', () => {
    expect(() =>
      math.matrixFromColumns()
    ).toThrow();
  });

  test('Matriz que não é vetor', () => {
    expect(() =>
      math.matrixFromColumns(
        [[1, 2], [3, 4]],
        [5, 6]
      )
    ).toThrow();
  });

  test('Vetor com mais de duas dimensões', () => {
    expect(() =>
      math.matrixFromColumns([
        [[1]]
      ])
    ).toThrow();
  });

});