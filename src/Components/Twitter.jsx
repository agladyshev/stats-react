import React, { Component } from "react";

export default class Twitter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <details>
        <summary>
          <img src="./icons/twitter_flat.png"></img>
          <h6>Twitter</h6>
        </summary>
        {/* <p>Overall</p> */}
        <dl>
          <div>
            <dt>Followers</dt>
            <dd>{this.props.twitter_followers}</dd>
          </div>
        </dl>
        <p>Last month</p>
        <dl>
          <div>
            <dt>Favorites</dt>
            <dd>{this.props.twitter_favorites_recent}</dd>
          </div>
          <div>
            <dt>Retweets</dt>
            <dd>{this.props.twitter_retweets_recent}</dd>
          </div>
        </dl>
      </details>
    );
  }
}
