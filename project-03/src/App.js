import { Component } from "react";
import "./App.css";
// import { ghUsers } from "./mockData";
import { CardList } from "./components/CardList/CardList";
import { Form } from "./components/Form/Form";

class App extends Component {
  state = {
    profiles: []
  };

  addNewGithubProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    const { profiles: profilesData } = this.state;
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <Form onSubmit={this.addNewGithubProfile} />
        <CardList profiles={profilesData} />
      </div>
    );
  }
}

export default App;
