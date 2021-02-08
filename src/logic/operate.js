import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  const minusOne = Big(-1);

  switch (operation) {
    case '+':
      return numOne.plus(numTwo).toNumber();
    case '-':
      return numOne.minus(numTwo).toNumber();
    case 'X':
      return numOne.times(numTwo).toNumber();
    case '÷':
      return numOne.div(numTwo).toNumber();
    case '%':
      return numOne.times(Big(0.01)).toNumber();
    case '+/-':
      return numOne.times(minusOne).toNumber();
    default:
      return Error;
  }
};

export default operate;
