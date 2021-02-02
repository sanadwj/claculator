import React from 'react';

// import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  console.log(props);
  const handleClick = buttonName => {
    // eslint-disable-next-line react/prop-types
    props.clickHandler(buttonName);
  };
  // ButtonPanel.propTypes = {
  //
  //   clickHandler: PropTypes.func,
  // };
  return (
    <>
      <div>
        <Button clickHandler={handleClick} name="AC" />
        <Button clickHandler={handleClick} name="+/-" />
        <Button clickHandler={handleClick} name="%" />
        <Button clickHandler={handleClick} name="÷" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="7" />
        <Button clickHandler={handleClick} name="8" />
        <Button clickHandler={handleClick} name="9" />
        <Button clickHandler={handleClick} name="X" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="4" />
        <Button clickHandler={handleClick} name="5" />
        <Button clickHandler={handleClick} name="6" />
        <Button clickHandler={handleClick} name="-" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="1" />
        <Button clickHandler={handleClick} name="2" />
        <Button clickHandler={handleClick} name="3" />
        <Button clickHandler={handleClick} name="+" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="0" />
        <Button clickHandler={handleClick} name="." />
        <Button clickHandler={handleClick} name="=" />
      </div>
    </>
  );
};

export default ButtonPanel;
