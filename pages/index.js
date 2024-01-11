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
        <button onClick={ () => { setView( view == 'list' ? 'create' : 'list'  )  }  }>switch view</button>
        { view == 'list' ? 

        
        <ul>
        { albums.map(  (album) => {
            return <li key={album.name}>{album.name}</li>
        })}
        </ul>



                :  
        <AlbumForm onSubmit={ (data) => {
            console.log("form was submit", data); 
            setAlbums( albums.concat( data));

        } }/>

        }

    </>
  )
}
