import React from 'react';
import classes from './NumberButton.module.css';
import { colors } from './../../utils/colorThemes';

const NumberButton = ({ number, status }) => {
  return (
    <button
      style={{ backgroundColor: colors[status] }}
      className={classes.number}
      onClick={() => console.log(number)}
    >
      {number}
    </button>
  );
};

export { NumberButton };
