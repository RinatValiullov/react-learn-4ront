import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <h1 className="header">{this.props.title}</h1>;
  }
}

export default App;
