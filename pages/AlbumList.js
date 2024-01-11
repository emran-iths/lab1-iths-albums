import AlbumListItem from './AlbumListItem'

const AlbumList = ({onClick, albums}) => {

    return <ul>
    { albums.map(  (album) => {
        return <AlbumListItem key={album.id} {...album} onClick={ () => { onClick(album) } } />     
    })}
    </ul>
}

export default AlbumList
