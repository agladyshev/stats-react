import React, { Component } from "react";

export default class Youtube extends Component {
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
