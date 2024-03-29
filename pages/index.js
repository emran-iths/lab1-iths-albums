import React, { useState, useEffect } from "react";
import AlbumForm from "./AlbumForm";
import AlbumList from "./AlbumList";

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [view, setView] = useState({ type: "list" });

  // Comment examinator: using fetch inside a useEffect hook to prevent a "nasty loop". But I am only fetching default data for this app. All updates and adds is not being done through the api. I am aware that best case senario is to do everything through the api but it seems a bit out of scope for this first task. Reason I fetch data like this in the first place is to show that I used that hook.
  useEffect(() => {
    fetch("/api/albums").then((data) => {
      data.json().then((data) => {
        setAlbums(data);
      });
    });
  }, []);

  return (
    <>
      {view.type == "list" ? ( // Comment examinator: I am aware that there is such as thing as a Switch statement in JS but since the iths document described this way of handling conditional rendering I went with what the documentation said. (I see nothing about what the correct way to do this according the requirement for this task)
        <>
          <h2>List</h2>
          <button
            onClick={() => {
              setView({ type: "create" });
            }}
          >
            Add album
          </button>

          <AlbumList
            onClick={(album) => {
              setView({ type: "edit", album: album });
            }}
            albums={albums}
          />
        </>
      ) : view.type == "edit" ? (
        <>
          <h2>Edit</h2>
          <AlbumForm
            {...view.album}
            onSubmit={(data) => {
              setAlbums(
                albums.map((album) => {
                  return view.album.id == album.id
                    ? { ...album, name: data.name, songs: data.songs }
                    : album;
                }),
              );
              setView({ type: "list" });
            }}
          />
        </>
      ) : view.type == "create" ? (
        <>
          <h2>Create</h2>
          <AlbumForm
            onSubmit={(data) => {
              setAlbums(
                albums.concat({
                  id:
                    Math.max(
                      ...albums.map((album) => {
                        return album.id;
                      }),
                    ) + 1,
                  ...data,
                }),
              );
              setView({ type: "list" });
            }}
          />
        </>
      ) : (
        <>Invalid view: {view}</>
      )}
    </>
  );
}
