import React, { Component } from "react";
import "./Ticker.css";
import data from "../currencies_data";

export default class Ticker extends Component {
  state = {
    value: 0,
  };

  constructor(props) {
    super(props);
  }
  render() {
    const { pair } = this.props;
    return (
      <div className="ticker">
        <p>{pair.toUpperCase().replace("_", " to ")}</p>
        <p>12 000</p>
      </div>
    );
  }
}
