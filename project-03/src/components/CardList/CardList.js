import React, { Component } from "react";
import { Card } from "./../Card/Card";
import { ghUsers } from "./../../mockData";

class CardList extends Component {
  render() {
    return (
      <div>
        <Card {...ghUsers[0]} />
        <Card {...ghUsers[1]} />
      </div>
    );
  }
}

export { CardList };
