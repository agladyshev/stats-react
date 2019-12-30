import React, { Component } from "react";
import "./App.css";

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewsPerVideoRecent: Math.round(
        props.youtube_views_recent / props.youtube_videos_recent
      ),
      likesPerVideo: Math.round(
        props.youtube_likes_recent / props.youtube_videos_recent
      ),
      dislikesPerVideo: Math.round(
        props.youtube_dislikes_recent / props.youtube_videos_recent
      ),
      commentsPerVideo: Math.round(
        props.youtube_comments_recent / props.youtube_videos_recent
      )
    };
  }
  render() {
    return (
      <details>
        <summary>
          <img src="./icons/youtube.png"></img>
          <h6>youtube</h6>
        </summary>
        {/* <p>Overall</p> */}
        <dl>
          <div>
            <dt>Subscribers</dt>
            <dd>{this.props.youtube_subscribers}</dd>
          </div>
          <div>
            <dt>Videos</dt>
            <dd>{this.props.youtube_videos}</dd>
          </div>
        </dl>
        <p>Per video</p>
        <dl>
          <div>
            <dt>Views</dt>
            <dd>{this.state.viewsPerVideoRecent}</dd>
          </div>
          <div>
            <dt>Likes</dt>
            <dd>{this.state.likesPerVideo}</dd>
          </div>
          <div>
            <dt>Dislikes</dt> <dd>{this.state.dislikesPerVideo}</dd>
          </div>
          <div>
            <dt>Comments</dt> <dd>{this.state.commentsPerVideo}</dd>
          </div>
        </dl>
      </details>
    );
  }
}

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtube: Object.fromEntries(
        Object.entries(props).filter(([key]) => key.includes("youtube"))
      )
    };
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
        <article className="account-description">
          <h2>{this.props.name}</h2>
          <div>Twitter followers: {this.props.twitter_followers}</div>
          <div>Telegram subscribers: {this.props.tg_channel_subscribers}</div>
        </article>
        <ul className="account-stats">
          <Youtube {...this.state.youtube} />
        </ul>
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
