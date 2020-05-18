import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  // [data, function to change the data]
  const [songs, setSongs] = useState([
    { title: "Cheap Sunglasses", id: 1 },
    { title: "Handlebars", id: 2 },
    { title: "Stayin' Alive", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    // setSongs will completely relace what's in the state
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect hook ran", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  );
};

export default SongList;
