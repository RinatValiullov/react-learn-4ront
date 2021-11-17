import { Component } from "react";
import "./App.css";
import { ghUsers } from "./mockData";
import { CardList } from "./components/CardList/CardList";
import { Form } from "./components/Form/Form";

class App extends Component {
  state = {
    profiles: ghUsers
  };

  render() {
    const { profiles: profilesData } = this.state;
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <Form />
        <CardList profiles={profilesData} />
      </div>
    );
  }
}

export default App;
