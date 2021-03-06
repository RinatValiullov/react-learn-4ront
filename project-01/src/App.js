import React, { Component } from "react";
import "./App.css";
import currencies from "./currencies";
import Ticker from "./Ticker/Ticker";

class App extends Component {
  state = {
    selectedPairs: ["BTC_USD"],
  };

  handleCheckBox = (currency) => (event) => {
    const { checked } = event.target;

    this.setState(({ selectedPairs }) => {
      let pairs = [...selectedPairs];

      if (checked) {
        pairs.push(currency);
      } else {
        pairs = pairs.filter((pair) => pair !== currency);
      }

      return {
        selectedPairs: pairs,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <aside>
          <ul className="currList">
            {currencies.map((curr) => (
              <li key={curr} className="currItem">
                <input
                  type="checkbox"
                  id={curr}
                  onChange={this.handleCheckBox(curr)}
                />
                <label htmlFor={curr}>{curr}</label>
              </li>
            ))}
          </ul>
        </aside>
        <section className="tickers">
          {this.state.selectedPairs.map((pair) => (
            <Ticker key={pair} pair={pair} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
