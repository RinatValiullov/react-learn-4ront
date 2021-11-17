import React, { Component } from "react";
import { Card } from "./../Card/Card";
import { ghUsers } from "./../../mockData";

class CardList extends Component {
  render() {
    return (
      <div>
        {ghUsers.map((profile) => (
          <Card {...profile} />
        ))}
      </div>
    );
  }
}

export { CardList };
