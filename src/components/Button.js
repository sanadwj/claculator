import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = buttonName => {
    props.handleClick(buttonName);
  };

  const { name } = props;
  return (
    <button onClick={() => { handleClick(name); }} type="button">
      <h3>{name}</h3>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
