import React, { Component } from "react";
import classes from "./Form.module.css";

class Form extends Component {
  render() {
    return (
      <form className={classes.form}>
        <input type="test" placeholder="Github username" />
        <button>Add card</button>
      </form>
    );
  }
}

export { Form };
