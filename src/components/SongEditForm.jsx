// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_API_URL;

// function SongEditForm() {
//   let { id } = useParams();
//   const navigate = useNavigate();

//   const [song, setSong] = useState({
//     name: "",
//     artist: "",
//     album: "",
//     time: "",
//     is_favorite: false,
//   });

//   const handleTextChange = (event) => {
//     setSong({ ...song, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setSong({ ...song, is_favorite: !song.is_favorite });
//   };

//   // Update a song. Redirect to show view
//   const updateSong = () => {
//     fetch(`${API}/songs/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(song),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => navigate(`/songs/${id}`))
//       .catch((err) => console.log(err));
//   };

//   // On page load, fill in the form with the song data.
//   useEffect(() => {
//     fetch(`${API}/songs/${id}`)
//       .then((res) => res.json())
//       .then((res) => setSong(res))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateSong();
//   };

//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={song.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Name of Song"
//           required
//         />

//         <label htmlFor="artist">Artist:</label>
//         <input
//           id="artist"
//           value={song.artist}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Artist"
//           required
//         />

//         <label htmlFor="album">Album:</label>
//         <input
//           id="album"
//           value={song.album}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Album"
//           required
//         />

//         <label htmlFor="time">Time:</label>
//         <input
//           id="time"
//           value={song.time}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Time"
//           required
//         />

//         <label htmlFor="is_favorite">Favorite:</label>
//         <input
//           id="is_favorite"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={song.is_favorite}
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <Link to={`/songs/${id}`}>
//         <button>Nevermind!</button>
//       </Link>
//     </div>
//   );
// }

// export default SongEditForm;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./SongEditForm.css";

const API = import.meta.env.VITE_API_URL;

function SongEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  // Update a song. Redirect to show view
  const updateSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => navigate(`/songs/${id}`))
      .catch((err) => console.log(err));
  };

  // On page load, fill in the form with the song data.
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => res.json())
      .then((res) => setSong(res))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <div className="SongEditFormContainer">
      <div className="SongEditFormBox">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Song"
            required
          />

          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            placeholder="Artist"
            required
          />

          <label htmlFor="album">Album:</label>
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            placeholder="Album"
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            placeholder="Time"
            required
          />

          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link to={`/songs/${id}`}>
          <button>Nevermind!</button>
        </Link>
      </div>
    </div>
  );
}

export default SongEditForm;
