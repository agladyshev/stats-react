import React, { Component } from "react";
import "./App.css";

class Account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const element = (
      <li key={this.key} className="account">
        <picture>
          <img
            className="account-picture"
            src={this.props.youtube_thumbnail || this.props.twitter_pic}
          ></img>
        </picture>
        <div className="account-main-stats">
          <h2>{this.props.name}</h2>
          <div>YouTube subscribers: {this.props.youtube_subscribers}</div>
          <div>Twitter followers: {this.props.twitter_followers}</div>
          <div>Telegram subscribers: {this.props.tg_channel_subscribers}</div>
        </div>
      </li>
    );
    return element;
  }
}

class Accounts extends Component {
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

class NavBar extends Component {
  render() {
    return <nav>zocial</nav>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar></NavBar>
        <Accounts></Accounts>
      </div>
    );
  }
}
export default App;
