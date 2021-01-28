import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button type="button">
      <h3>{name}</h3>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
