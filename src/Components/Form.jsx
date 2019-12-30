import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      telegramChannel: "",
      twitterName: "",
      youtubeName: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.telegramChannel ||
      this.state.twitterName ||
      this.state.youtubeName
    ) {
      console.log("success");
    } else {
      this.setState({
        errorMessage: "at least one social account is required"
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.errorMessage && <strong>{this.state.errorMessage}</strong>}
        <label>
          Name
          <input
            required
            size="8"
            name="name"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Telegram channel
          <input
            size="8"
            name="telegramChannel"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Twitter handle
          <input
            size="8"
            name="twitterName"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          YouTube name
          <input
            size="8"
            name="youtubeName"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>

        <input type="submit" value="submit" />
      </form>
    );
  }
}
