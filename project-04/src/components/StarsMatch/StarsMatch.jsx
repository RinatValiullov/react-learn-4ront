import React from 'react';
import classes from './StarsMatch.module.css';

const StarsMatch = (props) => {
  return (
    <div className={classes.game}>
      <h3 className={classes.title}>Pick 1 or more numbers that sum to the number of stars</h3>
    </div>
  );
};


export { StarsMatch };
