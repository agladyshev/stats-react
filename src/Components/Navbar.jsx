import React, { Component } from "react";
import Form from "./Form.jsx";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    // e.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <nav>
        <header>
          <h1>zocial</h1>
          <button onClick={this.toggleForm}>
            <img src="./icons/add-user.png"></img>
          </button>
        </header>
        {this.state.isToggleOn && <Form toggleForm={this.toggleForm}></Form>}
      </nav>
    );
  }
}
