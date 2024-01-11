
import SongListItem from './SongListItem'

const SongList = ({songs, onDelete}) => {


    return (
        <ul>
        { songs.map( (song) => {
            return <SongListItem key={song} name={song} onDelete={ () => { onDelete(song)} }/>
        })}
        </ul>
    )


}


export default SongList;
