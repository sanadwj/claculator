import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const Display = props => {
  const { total, operation, next } = props;
  return (
    <h1 className="display">
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
  total: String,
  operation: String,
  next: String,
};

export default Display;
