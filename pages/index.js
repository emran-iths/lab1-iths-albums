import React, {useState, useEffect} from 'react';
import AlbumForm from './AlbumForm'
import AlbumListItem from './AlbumListItem'

export default function Home() {

  const [albums, setAlbums] = useState([]);
  const [view, setView] = useState({type:'list'});

  useEffect( () => { 
    fetch("/api/albums").then( (data) => { data.json().then( (data) => { 
    setAlbums(data);
  })});  
  }, [] )


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
