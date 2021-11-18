import React, { Component } from "react";
import classes from "./Form.module.css";

class Form extends Component {
  state = {
    userName: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export { Form };
