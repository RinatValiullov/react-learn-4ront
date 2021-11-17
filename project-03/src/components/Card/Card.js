import React, { Component } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className={classes.githubProfile}>
        <img src={profile.avatar_url} alt="profile" />
        <div className={classes.info}>
          <div className={classes.name}>{profile.name}</div>
          <div className={classes.bio}>{profile.bio}</div>
        </div>
      </div>
    );
  }
}

export { Card };
