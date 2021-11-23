import React from 'react';
import classes from './NumberButton.module.css';

const NumberButton = ({ number }) => {
  return (
    <button
      className={classes.number}
      onClick={() => console.log(number)}
    >
      {number}
    </button>
  );
};

export { NumberButton };
