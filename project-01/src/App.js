import React, { Component } from "react";
import "./App.css";
import currencies from "./currencies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <ul className="currList">
            {currencies.map((curr) => (
              <li key={curr} className="currItem">
                <input type="checkbox" id={curr} />
                <label htmlFor={curr}>{curr}</label>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default App;
