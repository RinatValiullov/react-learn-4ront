import React, { useState } from 'react';
import classes from './StarsMatch.module.css';
import { utils } from './../../utils/utils';
import { NumberButton } from '../NumberButton/NumberButton';
import { StarsDisplay } from '../StarsDisplay/StarsDisplay';
import { PlayAgain } from '../PlayAgain/PlayAgain';

const StarsMatch = (props) => {
  const numberOfStars = utils.random(1, 9);
  const [stars, setStars] = useState(numberOfStars);
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameIsDone = availableNums.length === 0;

  const resetGame = () => {
    setStars(numberOfStars);
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
  };

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
    if (currentStatus === 'used') {
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
            gameIsDone ? (
              <PlayAgain handleClick={resetGame} />
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
      <div className={classes.timer}>Time remaining: 10</div>
    </div>
  );
};


export { StarsMatch };
