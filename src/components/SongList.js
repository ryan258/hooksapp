import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  // [data, function to change the data]
  const [songs, setSongs] = useState([
    { title: "Cheap Sunglasses", id: 1 },
    { title: "Handlebars", id: 2 },
    { title: "Stayin' Alive", id: 3 },
  ]);

  const addSong = () => {
    // setSongs will completely relace what's in the state
    setSongs([...songs, { title: "new song", id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
};

export default SongList;
