import React, { Component } from "react";
import Youtube from "./Youtube.jsx";
import TelegramChannel from "./TelegramChannel.jsx";
import Twitter from "./Twitter.jsx";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtube: Object.fromEntries(
        Object.entries(props).filter(([key]) => key.includes("youtube"))
      ),
      tgChannel: Object.fromEntries(
        Object.entries(props).filter(([key]) => key.includes("tg_channel"))
      ),
      twitter: Object.fromEntries(
        Object.entries(props).filter(([key]) => key.includes("twitter"))
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
          {this.props.twitter_status == "OK" ? (
            <Twitter {...this.state.twitter} />
          ) : null}
          {this.props.youtube_status == "OK" ? (
            <Youtube {...this.state.youtube} />
          ) : null}
          {this.props.tg_channel_status == "OK" ? (
            <TelegramChannel {...this.state.tgChannel} />
          ) : null}
        </ul>
      </li>
    );
    return element;
  }
}
