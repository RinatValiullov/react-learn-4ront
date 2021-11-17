import React, { Component } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  render() {
    return (
      <div className={classes.githubProfile}>
        <img src="https://via.placeholder.com/75" alt="profile" />
        <div className={classes.info}>
          <div className={classes.name}>Name...</div>
          <div className={classes.company}>Company</div>
        </div>
      </div>
    );
  }
}

export { Card };
