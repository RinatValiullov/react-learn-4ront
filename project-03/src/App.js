import { Component } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <Card />
      </div>
    );
  }
}

export default App;
