
import React, {useState} from 'react';
import SongListItem from './SongListItem'

const SongList = ({songs, onDelete, onAddSubmit}) => {

    const [getName, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddSubmit({name: getName});
        setName('');
    };

    return (<>
        <ul>
        { songs.map( (song) => {
            return <SongListItem key={song} name={song} onDelete={ () => { onDelete(song)} }/>
        })}
        </ul>
        <form onSubmit={handleSubmit}>
        <b>Song name:</b><input type="text" value={getName} onChange={handleNameChange} /><br/>
	    <button type="submit">Add song</button>
        </form>
        </>
    )


}


export default SongList;
