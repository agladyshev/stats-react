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
          <img src="./icons/youtube_flat.png"></img>
          <h6>YouTube</h6>
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
      // links: {
      // youtube_url: new URL(youtube_name, "https://www.youtube.com/user/")
      // }
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
        <header className="account-links">
          <h2>{this.props.name}</h2>
          <ul>
            {this.props.youtube_name && (
              <li>
                <a
                  href={
                    new URL(
                      this.props.youtube_name,
                      "https://www.youtube.com/user/"
                    )
                  }
                >
                  <img src="./icons/youtube.png"></img>
                </a>
              </li>
            )}
            {this.props.twitter_name && (
              <li>
                <a
                  href={
                    new URL(this.props.twitter_name, "https://www.twitter.com/")
                  }
                >
                  <img src="./icons/twitter.png"></img>
                </a>
              </li>
            )}
            {this.props.telegram_channel && (
              <li>
                <a
                  href={
                    new URL(
                      this.props.telegram_channel,
                      "https://www.telegram.me/"
                    )
                  }
                >
                  <img src="./icons/telegram.png"></img>
                </a>
              </li>
            )}
          </ul>
        </header>
        <article className="account-description">
          <p>{this.props.youtube_description.split(".")[0]}</p>
          {/* <div>Twitter followers: {this.props.twitter_followers}</div> */}
          {/* <div>Telegram subscribers: {this.props.tg_channel_subscribers}</div> */}
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
    return (
      <nav>
        <h1>zocial </h1>
      </nav>
    );
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
