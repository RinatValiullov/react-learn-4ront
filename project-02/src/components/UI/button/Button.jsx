import React from 'react';
import classes from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.createButton}>
      {children}
    </button>
  );
};

export { Button };
