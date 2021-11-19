import React, { Component } from "react";
import classes from "./Form.module.css";
import axios from "axios";

class Form extends Component {
  state = {
    userName: ""
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({ userName: "" });
  };

  handleChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={this.handleChange}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export { Form };
