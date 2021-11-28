import React from 'react';
import classes from './Game.module.css';
import { utils } from '../../utils/utils';
import { useGameState } from './../../hooks/useGameState';
import { NumberButton } from '../NumberButton/NumberButton';
import { StarsDisplay } from '../StarsDisplay/StarsDisplay';
import { PlayAgain } from '../PlayAgain/PlayAgain';

const Game = ({ startNewGame }) => {

  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const handleNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }
    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(candNum => candNum !== number);

    setGameState(newCandidateNums);

  };

  return (
    <div className={classes.game}>
      <h3 className={classes.title}>Pick 1 or more numbers that sum to the number of stars</h3>
      <div className={classes.board}>
        <div className={classes.stars}>
          {
            gameStatus !== 'active' ? (
              <PlayAgain handleClick={startNewGame} gameStatus={gameStatus} />
            ) : (
              <StarsDisplay count={stars} />
            )
          }
        </div>
        <div className={classes.buttons}>
          {
            utils.range(1, 9).map(number => {
              return <NumberButton
                key={number}
                number={number}
                status={numberStatus(number)}
                onClick={handleNumberClick}
              />;
            })
          }
        </div>
      </div>
      <div className={classes.timer}>Time remaining: {secondsLeft}</div>
    </div>
  );
};


export { Game };
