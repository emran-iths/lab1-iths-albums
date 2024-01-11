
import SongListItem from './SongListItem'

const SongList = ({songs}) => {


    return (
        <ul>
        { songs.map( (song) => {
            return <SongListItem key={song} name={song}/>
        })}
        </ul>
    )


}


export default SongList;
