import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  // [data, function to change the data]
  const [songs, setSongs] = useState([
    { title: "Cheap Sunglasses", id: 1 },
    { title: "Handlebars", id: 2 },
    { title: "Stayin' Alive", id: 3 },
  ]);

  const addSong = (title) => {
    // setSongs will completely relace what's in the state
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
