import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { total, operation, next } = props;
  return (
    <h1>
      {(!total && next) || total }
      {operation }
      {(total && next)}
    </h1>
  );
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  operation: '0',
  next: '0',
};

export default Display;
