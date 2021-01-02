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
        <p>
          {data.map((res) => {
            if (
              res.symbol === pair.substr(0, 3) ||
              res.symbol === pair.substr(0, 4) ||
              res.symbol === pair.substr(0, 5) ||
              res.symbol === pair.substr(0, 6)
            ) {
              return res.quote.USD.price.toFixed(2);
            }
          })}
        </p>
      </div>
    );
  }
}
