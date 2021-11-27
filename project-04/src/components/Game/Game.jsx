import React, { useState, useEffect } from 'react';
import classes from './Game.module.css';
import { utils } from '../../utils/utils';
import { NumberButton } from '../NumberButton/NumberButton';
import { StarsDisplay } from '../StarsDisplay/StarsDisplay';
import { PlayAgain } from '../PlayAgain/PlayAgain';

const Game = ({ startNewGame }) => {
  const numberOfStars = utils.random(1, 9);
  const [stars, setStars] = useState(numberOfStars);
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(prev => --prev);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

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

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));

      setAvailableNums(newAvailableNums);

      setCandidateNums([]);
    }
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
