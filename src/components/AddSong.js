import React, { useState } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions";

const AddSong = (props) => {
  const [name, setName] = useState(null);
  const [time, setTime] = useState(null);
  const [author, setAuthor] = useState(null);

  return (
    <div>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          return props.addSongAction({ name, time, author });
        }}
      >
        <div className="field">
          <label>Song name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="first-name"
            placeholder="Enter Song name"
          />
        </div>
        <div className="field">
          <label>Song time</label>
          <input
            onChange={(e) => setTime(e.target.value)}
            type="text"
            name="last-name"
            placeholder="Enter Song time"
          />
        </div>
        <div className="field">
          <label>Song author</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="last-name"
            placeholder="Enter Song author"
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const getMyState = (state) => {
  return state;
};

export default connect(getMyState, {
  addSongAction,
})(AddSong);
