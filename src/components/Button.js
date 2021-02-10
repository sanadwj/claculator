import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import styled from 'styled-components';

const Button = props => {
  const handleClick = buttonName => {
    props.handleClick(buttonName);
  };

  const { name } = props;
  const ButtonText = styled.button`
  width: ${props => (props.name === '0' ? '50%' : '25%')};
  height: 100px;
  background-color: ${props => (props.name === '-' || props.name === 'X' || props.name === '+' || props.name === '=' || props.name === '÷' ? 'orange' : 'lightgray')};
`;

  return (
    <ButtonText name={name} className="button" onClick={() => { handleClick(name); }} type="button">
      <h3>{name}</h3>
    </ButtonText>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
