import React, { useState } from "react";
import SongList from "./SongList";

const AlbumForm = ({ onSubmit, id, name, songs }) => {
  const [getName, setName] = useState(name ? name : "");
  const [getSongs, setSongs] = useState(songs ? songs : []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name: getName, songs: getSongs });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <b>Id:</b>
        <input type="text" value={id} disabled />
        <br />
        <b>Name:</b>
        <input type="text" value={getName} onChange={handleNameChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <SongList
        songs={getSongs}
        onAddSubmit={(data) => {
          setSongs(getSongs.concat(data.name));
        }}
        onDelete={(song_to_delete) => {
          setSongs(
            getSongs.filter((song) => {
              return song != song_to_delete;
            }),
          );
        }}
      />
    </>
  );
};

export default AlbumForm;
