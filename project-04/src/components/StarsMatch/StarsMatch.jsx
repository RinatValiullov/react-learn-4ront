import React, { useState } from 'react';
import classes from './StarsMatch.module.css';
import { utils } from './../../utils/utils';
import { NumberButton } from '../NumberButton/NumberButton';
import { StarsDisplay } from '../StarsDisplay/StarsDisplay';

const StarsMatch = (props) => {
  // const numberOfStars = utils.random(1, 9);
  const [stars, setStars] = useState(utils.random(1, 9));
  return (
    <div className={classes.game}>
      <h3 className={classes.title}>Pick 1 or more numbers that sum to the number of stars</h3>
      <div className={classes.board}>
        <div className={classes.stars}>
          <StarsDisplay count={stars} />
        </div>
        <div className={classes.buttons}>
          {
            utils.range(1, 9).map(number => {
              return <NumberButton key={number} number={number} />;
            })
          }
        </div>
      </div>
      <div className={classes.timer}>Time remaining: 10</div>
    </div>
  );
};


export { StarsMatch };
