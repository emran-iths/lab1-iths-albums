const SongListItem = ({name, onDelete}) => {

    return <li>{name}<button onClick={onDelete}>Delete</button></li>

}


export default SongListItem;
