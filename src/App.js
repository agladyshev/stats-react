import React, { Component } from "react";
import "./App.css";

class Account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li key={this.key}>Hello, {this.props.name}</li>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }
  componentDidMount() {
    fetch("/getAccounts")
      .then(res => res.json())
      .then(accounts => this.setState({ accounts }));
  }
  render() {
    const accounts = this.state.accounts.map((account, key) => (
      <Account {...account} key={key}></Account>
    ));

    return <ul>{accounts}</ul>;
  }
}
export default App;
