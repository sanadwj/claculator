import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <Display next={next} />

        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
