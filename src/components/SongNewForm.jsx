// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const API = import.meta.env.VITE_API_URL;

// function SongNewForm() {
//   const navigate = useNavigate();
//   const [song, setSong] = useState({
//     name: "",
//     artist: "",
//     album: "",
//     time: "",
//     is_favorite: false,
//   });

//   // Add a song. Redirect to the index view.
//   const addSong = () => {
//     fetch(`${API}/songs`, {
//       method: "POST",
//       body: JSON.stringify(song),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         navigate("/songs");
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleTextChange = (event) => {
//     setSong({ ...song, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setSong({ ...song, is_favorite: !song.is_favorite });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addSong();
//   };

//   return (
//     <div className="New">
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
//       <Link to={`/songs`}>
//         <button>Nevermind!</button>
//       </Link>
//     </div>
//   );
// }

// export default SongNewForm;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SongNewForm.css";

const API = import.meta.env.VITE_API_URL;

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  // Add a song. Redirect to the index view.
  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/songs");
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="SongNewFormContainer">
      <div className="SongNewFormBox">
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
        <Link to={`/songs`}>
          <button>Nevermind!</button>
        </Link>
      </div>
    </div>
  );
}

export default SongNewForm;
