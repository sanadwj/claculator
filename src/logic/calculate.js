import operate from './operate';

const calculate = (
  data = {
    total: '',
    next: '',
    operation: '',
  },
  buttonName,
) => {
  let { total, next } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    return next;
  }

  if (numbers.includes(buttonName)) {
    return {
      total,
      next: `${buttonName}`,

    };
  }

  if (buttonName === '.') {
    return {
      total,
      next: '0.',
    };
  }

  return operate(total, next, buttonName);
};

export default calculate;
