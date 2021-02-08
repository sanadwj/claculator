import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: '',
    operation: '',
    next: '',
  });

  const handleClick = buttonName => {
    const result = calculate(state, buttonName);
    setState(result);
  };

  return (
    <>
      <Display total={state.total} operation={state.operation} next={state.next} />
      <ButtonPanel clickHandler={handleClick} />
    </>

  );
};

export default App;
