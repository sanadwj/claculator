import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { next } = props;
  return (
    <h1>{next}</h1>
  );
};

Display.propTypes = {
  next: PropTypes.string,
};

Display.defaultProps = {
  next: '0',
};

export default Display;
