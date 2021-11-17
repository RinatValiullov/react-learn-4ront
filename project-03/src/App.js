import { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Form } from "./components/Form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default App;
