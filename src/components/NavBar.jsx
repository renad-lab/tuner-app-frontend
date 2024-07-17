// import { Link } from "react-router-dom";

// export default function NavBar() {
//   return (
//     <nav>
//       <h1>
//         <Link to="/songs">Songs</Link>
//       </h1>
//       <button>
//         <Link to="/songs/new">Add New Song</Link>
//       </button>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <button>
        <Link to="/songs/new">Add New Song</Link>
      </button>
    </nav>
  );
}
