import React, { Component } from "react";
import "./App.css";
import currencies from "./currencies";

class App extends Component {
  render() {
    return (
      <div className="app">
        <aside>
          <ul className="currList">
            {currencies.map((curr) => (
              <li key={curr} className="currItem">
                {curr}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default App;
