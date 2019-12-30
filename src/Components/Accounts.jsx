import React, { Component } from "react";
import Account from "./Account.jsx";

export default class Accounts extends Component {
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

    return (
      <main>
        <ul>{accounts}</ul>
      </main>
    );
  }
}
