import React from 'react';
import classes from './NumberButton.module.css';
import { colors } from './../../utils/colorThemes';

const NumberButton = ({ number, status, onClick }) => {
  return (
    <button
      style={{ backgroundColor: colors[status] }}
      className={classes.number}
      onClick={() => onClick(number, status)}
    >
      {number}
    </button>
  );
};

export { NumberButton };
