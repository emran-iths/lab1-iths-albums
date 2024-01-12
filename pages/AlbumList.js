import AlbumListItem from "./AlbumListItem";

const AlbumList = ({ onClick, albums }) => {
  return (
    <ul>
      {albums && albums.length > 0 ? (
        albums.map((album) => {
          return (
            <AlbumListItem
              key={album.id}
              {...album}
              onClick={() => {
                onClick(album);
              }}
            />
          );
        })
      ) : (
        <li>
          <i>No albums</i>
        </li>
      )}
    </ul>
  );
};

export default AlbumList;
