import operate from './operate';

const calculate = (
  {
    total,
    next,
    operation,
  },
  buttonName,
) => {
  const operations = ['%', '÷', '+', '-', 'X'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-') {
    return {
      total: -total,
      next: -next,
      operation,
    };
  }

  if (buttonName === '.') {
    if (!next) {
      return {
        total,
        next: '0.',
      };
    }
    if (next && !next.includes('.')) {
      return {
        total,
        next: `${next}.`,
      };
    }
  }

  if (operations.includes(buttonName) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (numbers.includes(buttonName) && ((total && operation) || (!total && !operation))) {
    return {
      next: next ? `${next}${buttonName}` : `${buttonName}`,
    };
  }

  if (buttonName === '=' && total && next && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  return operate(total, next, operation);
};

export default calculate;
