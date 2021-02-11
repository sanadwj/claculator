import calculate from '../calculate';

describe('User press AC key', () => {
  test('Clear everything', () => {
    expect(calculate({
      total: '5', next: '3', operation: '+',
    }, 'AC')).toEqual({
      total: '', next: '', operation: '',
    });
  });
  test('Clear everything', () => {
    expect(calculate({
      total: '5', next: '3', operation: '+',
    }, 'AC')).not.toEqual({
      total: '5', next: '3', operation: '+',
    });
  });
});

describe('User can enter a number', () => {
  test('Number from (0-9)', () => {
    let buttonName = '8';
    let result = calculate({
      total: '', next: '', operation: '',
    }, buttonName);
    expect(result.next).toEqual('8');
    buttonName = '4';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('84');
  });
});

describe('User can get the final answer', () => {
  test(' When User press the (=) button', () => {
    const result = calculate({
      total: '4', next: '3', operation: '-',
    }, '=');
    expect(result.total).toEqual(1);
  });
});

describe('User can create a decimal', () => {
  test('When user press (.)', () => {
    let buttonName = '8';
    let result = calculate({
      total: '', next: '', operation: '',
    }, buttonName);
    expect(result.next).toEqual('8');
    buttonName = '.';
    result = calculate(result, buttonName);
    buttonName = '4';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('8.4');
  });
});
