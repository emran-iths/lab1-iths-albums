import React, {useState} from 'react';

const AlbumForm = ({onSubmit}) => {

    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name: name});
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange} />
            <button type="submit">Submit</button>
        </form>
    );
        
}

export default function Home() {

  let default_albums = [
    {"name":"test-album"}
  ];

  const [albums, setAlbums] = useState(default_albums);
  const [view, setView] = useState('list');

  

  return (
    <>
        { view == 'list' ? // Comment examinator: I am aware that there is such as thing as a Switch statement in JS but since the iths document described this way of handling conditional rendering I went with what the documentation said. (I see nothing about what the correct way to do this according the requirement for this task)


        <>
        <h2>List</h2>
        <button onClick={ () => { setView('create')  }  }>Add album</button>

        <ul>
        { albums.map(  (album) => {
            return <li key={album.name}>
                    {album.name} 
                    <button onClick={ () => { setView('edit')} }>Edit</button>
                </li>
            
        })}
        </ul>
        </>

        :

        view == 'edit' ? 

        <>
        <h2>Edit</h2>
        <u></u>
        </>

        :  

        view == 'create' ?
        <>
        <h2>Create</h2>
        <AlbumForm onSubmit={ (data) => {
            console.log("form was submit", data); 
            setAlbums( albums.concat( data));
            setView('list');
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
