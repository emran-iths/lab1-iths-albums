import React, {useState} from 'react';

const AlbumForm = ({onSubmit, id, name}) => {

    const [getName, setName] = useState(name);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name: getName});
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <b>Id:</b><input type="text" value={id} disabled /><br/>
            <b>Name:</b><input type="text" value={getName} onChange={handleNameChange} /><br/>
            <button type="submit">Submit</button>
        </form>
    );
        
}

export default function Home() {

  let default_albums = [
    {"id":1, "name":"test-album-1"},
    {"id":2, "name":"test-album-2"},
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
            return <li key={album.name}>
                    {album.id},
                    {album.name} 
                    <button onClick={ () => { setView({type:'edit', album: album})} }>Edit</button>
                </li>
            
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
