// import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
// import Show from "./components/Show/Show";
// import New from "./components/New/New";
// import Edit from "./components/Edit/Edit";
// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import { Routes, Route, Navigate } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/songs" replace />} />
//         <Route path="/songs" element={<Home />} />
//         <Route path="/songs/new" element={<New />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/songs/:index" element={<Show />} />
//         <Route path="/songs/:index/edit" element={<Edit />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";

// COMPONENTS
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
