import React from 'react';
import classes from './PlayAgain.module.css';

const PlayAgain = ({ handleClick, gameStatus }) => {
  return (
    <div className={classes.gameDone}>
      <div
        className={classes.message}
        style={{ color: gameStatus === 'lost' ? 'red' : 'gren' }}
      >
        {
          gameStatus === 'lost' ? 'Game over' : 'Winner!'
        }
      </div>
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
};

export { PlayAgain };
