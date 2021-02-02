import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  const minusOne = new Big(-1);
  let result;

  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case 'X':
      result = numOne.times(numTwo);
      break;
    case '÷':
      result = numOne.div(numTwo);
      break;
    case '%':
      result = numOne.times(Big(0.01));
      break;
    case '+/-':
      result = numOne.times(minusOne);
      break;
    default:
      return -1;
  }

  return result;
};

export default operate;
