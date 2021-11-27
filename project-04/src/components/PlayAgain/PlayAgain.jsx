import React from 'react';
import classes from './PlayAgain.module.css';

const PlayAgain = ({ handleClick }) => {
  return (
    <div className={classes.gameDone}>
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
};

export { PlayAgain };
