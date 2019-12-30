import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      telegramChannel: "",
      twitterName: "",
      youtubeName: "",
      errorMessage: ""
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
      this.setState({
        errorMessage: ""
      });
      fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(
            Object.entries(this.state).filter(([key, value]) => value)
          )
        })
      }).then(res => {
        if (res.status == 200) {
          this.props.toggleForm();
        } else {
          this.setState({
            errorMessage: res.statusText
          });
        }
      });
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
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Telegram channel
          <input
            size="8"
            name="telegramChannel"
            type="text"
            value={this.state.telegramChannel}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Twitter handle
          <input
            size="8"
            name="twitterName"
            type="text"
            value={this.state.twitterName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          YouTube name
          <input
            size="8"
            name="youtubeName"
            type="text"
            value={this.state.youtubeName}
            onChange={this.handleInputChange}
          />
        </label>

        <input type="submit" value="submit" />
      </form>
    );
  }
}
