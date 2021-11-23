import React from 'react';
import classes from './StarsDisplay.module.css';
import { utils } from '../../utils/utils';

const StarsDisplay = ({ count }) => {
  return (
    <>
      {
        utils.range(1, count).map(star => {
          return <div key={star} className={classes.star} />;
        })
      }
    </>
  );
};


export { StarsDisplay };
