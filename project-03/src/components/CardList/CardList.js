import React, { Component } from "react";
import { Card } from "./../Card/Card";

class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.profiles.map((profile) => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}

export { CardList };
