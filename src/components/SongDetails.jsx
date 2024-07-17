// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_API_URL;

// function SongDetails() {
//   const [song, setSong] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Fetch song details on component mount
//   useEffect(() => {
//     fetch(`${API}/songs/${id}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch song");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setSong(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   // Handle song deletion
//   const handleDelete = () => {
//     fetch(`${API}/songs/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to delete song");
//         }
//         return res.json();
//       })
//       .then(() => {
//         navigate("/songs");
//       })
//       .catch((err) => {
//         console.error(err);
//         // Handle error state or feedback to user
//       });
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="SongDetails">
//       <h3>
//         {song.is_favorite ? <span>⭐️</span> : null}
//         <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
//         {song.name}
//       </h3>
//       <p>
//         <strong>Artist:</strong> {song.artist}
//       </p>
//       <p>
//         <strong>Album:</strong> {song.album}
//       </p>
//       <p>
//         <strong>Time:</strong> {song.time}
//       </p>

//       <div className="showNavigation">
//         <div>
//           <Link to={`/songs`}>
//             <button>Back</button>
//           </Link>
//         </div>
//         <div>
//           <Link to={`/songs/${id}/edit`}>
//             <button>Edit</button>
//           </Link>
//         </div>
//         <div>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SongDetails;

import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SongDetails.css";

const API = import.meta.env.VITE_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch song details on component mount
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch song");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSong(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle song deletion
  const handleDelete = () => {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete song");
        }
        return res.json();
      })
      .then(() => {
        navigate("/songs");
      })
      .catch((err) => {
        console.error(err);
        // Handle error state or feedback to user
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="SongDetailsContainer">
      <div className="SongDetailsBox">
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null}
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {song.name}
        </h3>
        <p>
          <strong>Artist:</strong> {song.artist}
        </p>
        <p>
          <strong>Album:</strong> {song.album}
        </p>
        <p>
          <strong>Time:</strong> {song.time}
        </p>

        <div className="showNavigation">
          <div>
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
