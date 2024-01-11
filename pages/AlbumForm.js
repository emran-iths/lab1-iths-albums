import React, {useState} from 'react';
import SongList from './SongList'



const AlbumForm = ({onSubmit, id, name, songs}) => {

    const [getName, setName] = useState(name ? name : '');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name: getName});
        setName('');
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <b>Id:</b><input type="text" value={id} disabled /><br/>
            <b>Name:</b><input type="text" value={getName} onChange={handleNameChange} /><br/>
            <button type="submit">Submit</button>
        </form>
        { songs ? <SongList songs={songs}/> : '' }
        </>
    );
        
}

export default AlbumForm
