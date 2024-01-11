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

export default AlbumForm
