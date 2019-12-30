import React, { Component } from "react";

export default class TelegramChannel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <details>
        <summary>
          <img src="./icons/telegram_flat.png"></img>
          Telegram channel
        </summary>
        <p>
          According to <a href="https://tgstat.com/">tgstat.com</a>
        </p>
        <dl>
          <div>
            <dt>Daily reach</dt>
            <dd>{this.props.tg_channel_daily_reach}</dd>
          </div>
          <div>
            <dt>Subscribers</dt> <dd>{this.props.tg_channel_subscribers}</dd>
          </div>
          <div>
            <dt>Posts / day</dt> <dd>{this.props.tg_channel_posts_per_day}</dd>
          </div>
          <div>
            <dt>Post reach</dt>
            <dd>{this.props.tg_channel_post_reach}</dd>
          </div>
        </dl>
      </details>
    );
  }
}
