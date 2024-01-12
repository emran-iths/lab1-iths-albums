const AlbumListItem = ({ id, name, onClick }) => {
  return (
    <li>
      {id},{name}
      <button onClick={onClick}>Edit</button>
    </li>
  );
};

export default AlbumListItem;
