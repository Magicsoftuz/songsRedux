import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

import Header from "./Header";
import AddSong from "./AddSong";

const App = () => {
  const [show, setShow] = useState(false);

  const getShow = (data) => {
    setShow(data);
  };
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <Header />
      <button className="ui green basic button" onClick={() => setShow(!show)}>
        Add Song
      </button>

      <div style={{ marginTop: "20px" }}>
        {show ? <AddSong func={getShow} /> : ""}
      </div>

      <div className="ui grid " style={{ marginTop: "20px" }}>
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
