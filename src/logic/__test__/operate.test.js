import operate from '../operate';

describe('User can use operations', () => {
  test('Division(÷) operation', () => {
    const result = operate('12', '3', '÷');
    expect(result).toEqual(4);
  });

  test('Times(X) operation', () => {
    const result = operate('6', '3', 'X');
    expect(result).toEqual(18);
  });

  test('Minus(-) operation', () => {
    const result = operate('10', '4', '-');
    expect(result).toEqual(6);
  });

  test('Plus(+) operation', () => {
    const result = operate('6', '3', '+');
    expect(result).toEqual(9);
  });
});
