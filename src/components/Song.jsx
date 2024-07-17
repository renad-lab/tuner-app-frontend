import { Link } from "react-router-dom";

function Song({ song, id }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${id}`}> {song.name}</Link>
      </td>
    </tr>
  );
}

export default Song;
