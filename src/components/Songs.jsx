// import { useState, useEffect } from "react";
// import Song from "./Song";

// const API = import.meta.env.VITE_API_URL;

// function Songs() {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/songs`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setSongs(res);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="Songs">
//       <section>
//         <table>
//           <thead>
//             <tr>
//               <th>Favorite</th>
//               <th>Song Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {songs.map((song) => {
//               return <Song key={song.id} song={song} id={song.id} />;
//             })}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// }

// export default Songs;

import React, { useState, useEffect } from "react";
import Song from "./Song";
import "./Songs.css";

const API = import.meta.env.VITE_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSongs(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="SongsContainer">
      <div className="SongsTable">
        <section>
          <table>
            <thead>
              <tr>
                <th>Favorite</th>
                <th>Song Name</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => {
                return <Song key={song.id} song={song} id={song.id} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Songs;
