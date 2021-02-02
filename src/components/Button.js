import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  console.log(props);
  const handleClick = buttonName => {
    // eslint-disable-next-line react/prop-types
    props.clickHandler(buttonName);
  };
  const { name } = props;
  return (
    <button onClick={handleClick} type="button">
      <h3>{name}</h3>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
