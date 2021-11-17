import { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
