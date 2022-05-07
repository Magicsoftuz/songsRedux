import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  renderDetail() {
    if (this.props.selectSongReducer.name) {
      return (
        <div className="ui card">
          <div className="image">
            <img src="https://www.schooldrillers.com/st-jairus-stainless-love/st-jairus/" />
          </div>
          <div className="content">
            <a className="header">{this.props.selectSongReducer.name}</a>
            <div className="meta">
              <span className="date">{this.props.selectSongReducer.time}</span>
            </div>
            <div className="description">
              {this.props.selectSongReducer.author}
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              22 downloads
            </a>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
  render() {
    return <div>{this.renderDetail()}</div>;
  }
}
const getMyState = (state) => {
  return state;
};

export default connect(getMyState)(SongDetail);
