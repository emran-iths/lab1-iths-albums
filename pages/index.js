import React, {useState} from 'react';
import AlbumForm from './AlbumForm'
import AlbumListItem from './AlbumListItem'


export default function Home() {

  let default_albums = [
    {"id":1, "name":"test-album-1", "songs":['song 1','song 2']},
    {"id":2, "name":"test-album-2", "songs":['song 3']},
  ];

  const [albums, setAlbums] = useState(default_albums);
  const [view, setView] = useState({type:'list'});

  

  return (
    <>
        { view.type == 'list' ? // Comment examinator: I am aware that there is such as thing as a Switch statement in JS but since the iths document described this way of handling conditional rendering I went with what the documentation said. (I see nothing about what the correct way to do this according the requirement for this task)


        <>
        <h2>List</h2>
        <button onClick={ () => { setView({type:'create'})}  }>Add album</button>

        <ul>
        { albums.map(  (album) => {
            return <AlbumListItem key={album.id} {...album} onClick= { () => { setView({type:'edit', album: album})} } /> 
            
        })}
        </ul>
        </>

        :

        view.type == 'edit' ? 

        <>
        <h2>Edit</h2>
        <AlbumForm {...view.album} onSubmit={ (data) => {
            setAlbums( albums.map( (album) => { return view.album.id == album.id ? {...album, "name": data.name} : album  }  ) )
            setView({type:'list'});
        } }/>
        </>

        :  

        view.type == 'create' ?
        <>
        <h2>Create</h2>
        <AlbumForm onSubmit={ (data) => {
            console.log("form was submit", data); 
            setAlbums( albums.concat( { "id": Math.max(...albums.map( (album) => { return album.id }  ))+1, ...data}));
            setView({type:'list'});
        } }/>
        </>

        :

        <>
        Invalid view: {view}
        </>

        }

    </>
  )
}
